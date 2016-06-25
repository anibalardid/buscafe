#!/bin/sh
if [ -z "$1" ]
  then
    echo "No argument supplied"
    exit 1
fi

file="$1.apk"
if [ -f "$file" ]
then
    rm "$file"
fi

echo "Making New Release"
echo ""
echo "Building android release"
echo ""
if [ ! -d "platform/android/" ]
then
	ionic platform add android
fi

ionic build android
ionic build android --release

echo ""
echo "Copying unsigned apk to base path"
echo ""
cp platforms/android/build/outputs/apk/android-release-unsigned.apk .

if [ -f "$1.keystore" ]
then
    echo ""
else
	echo ""
	echo "Generete private key"
	echo ""
	keytool -genkey -v -keystore $1.keystore -alias $1 -keyalg RSA -keysize 2048 -validity 10000
fi


echo ""
echo "Signing unsigned apk file"
echo ""
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $1.keystore android-release-unsigned.apk $1

echo ""
echo "Zipaligning apk file"
echo ""
/home/anibal/tmp/android-sdk-linux/build-tools/23.0.3/zipalign -v 4 android-release-unsigned.apk $1.apk

if [ -f "$file" ]
then
    rm android-release-unsigned.apk 
    echo ""
    echo "$file Created"
fi

