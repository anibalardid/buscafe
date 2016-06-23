var app = angular.module('buscafe.services', []);

app.service("YelpService", function ($q, $http, $ionicLoading, $cordovaGeolocation, $ionicPopup) {
	var self = {
		'page': 1,
		'isLoading': false,
		'hasMore': true,
		'results': [],
		'lat': 51.544440,
		'lon': -0.022974,
		'refresh': function () {
			self.page = 1;
			self.isLoading = false;
			self.hasMore = true;
			self.results = [];
			return self.load();
		},
		'next': function () {
			self.page += 1;
			return self.load();
		},
		'load': function () {
			self.isLoading = true;
			var deferred = $q.defer();

			ionic.Platform.ready(function () {
				$cordovaGeolocation
					.getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
					.then(function (position) {
						self.lat = position.coords.latitude;
						self.lon = position.coords.longitude;

						var params = {
							page: self.page,
							lat: self.lat,
							lon: self.lon
						};


						$http.get('http://ardid.com.ar/yelp/php/sample.php', {params: params})
							.success(function (data) {
								$ionicLoading.hide();
								console.log(data);

								if (data.qty == 0) {
									self.hasMore = false;
								} else {
									angular.forEach(data.businesses, function (business) {
										self.results.push(business);
									});
								}

								self.isLoading = false;
								deferred.resolve();
							})
							.error(function (data, status, headers, config) {
								$ionicLoading.hide();
								self.isLoading = false;
								deferred.reject(data);
							});

					}, function (err) {
						$ionicLoading.hide();
						console.error("Error getting position");
						console.error(err);
						$ionicPopup.alert({
							'title':'Por favor encienda la geolocalización',
							'template': "Parece que tienes el gps desacticado. Por favor enciendalo y vuelva a ingresar a la aplicación."
						});
					})
			});

			return deferred.promise;
		}
	};

	self.load();

	return self;
});