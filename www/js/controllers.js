var app = angular.module('buscafe.controllers', []);

app.controller("BuscafeController", function ($scope, YelpService, $ionicLoading) {
    $ionicLoading.show();
    $scope.yelp = YelpService;

    $scope.doRefresh = function () {
        if (!$scope.yelp.isLoading) {
            $scope.yelp.refresh().then(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
    };

    $scope.loadMore = function () {
        console.log("loadMore");
        if (!$scope.yelp.isLoading && $scope.yelp.hasMore) {
            $scope.yelp.next().then(function () {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }
    };

    $scope.getDirections = function (cafe) {
        console.log("Getting directions for cafe");
        var destination = [
            cafe.location.coordinate.latitude,
            cafe.location.coordinate.longitude
        ];

        var source = [
            $scope.yelp.lat,
            $scope.yelp.lon
        ];

        launchnavigator.navigate(destination, source);
    };
});
