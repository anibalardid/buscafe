[![Circle CI](https://circleci.com/gh/driftyco/ionic.svg?style=svg)](https://circleci.com/gh/driftyco/ionic)

[![NPM](https://nodei.co/npm/ionic.png?stars&downloads)](https://nodei.co/npm/ionic/)

Looking for Ionic [documentation](http://ionicframework.com/docs/)?

# About me

I am web developer since 15 years. Now I'm exploring mobile developement world.

So, I'm testing developing apps with Ionic Framework, and my firsts works I'm doing open source and sharing into github.

# About Buscafe
This is an hybrid application to search cafe shop near my gps position.

## Ionic Quick Start

To start using ionic, you have two options: copy over the built JS and CSS files, or
use the `ionic` tool ([ionic-cli](https://github.com/driftyco/ionic-cli)) which can be installed through npm (recommended): _(You may need to prefix the command with `sudo` depending on your OS and setup.)_

Additionally, Ionic have a desktop GUI tool that we recently released called [Ionic Lab](http://lab.ionic.io). If you try it, let us know what you think!

To get started with the CLI flow, fire up your terminal and run:

```bash
npm install -g ionic
```

Then, you can start a new ionic project by running:

```bash
ionic start myproject
```

## Test and use Buscafe App

Download and install dependencies:

```bash
git clone https://github.com/anibalardid/buscafe.git
cd buscafe
npm install && bower install
ionic state reset OR ionic state restore --plugins
```

Run in browser into lab mode:

```bash
ionic serve --lab
```


