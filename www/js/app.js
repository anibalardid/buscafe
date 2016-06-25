// Ionic Starter App

angular.module('buscafe', [
    'ionic',
    'ngCordova',
    'buscafe.controllers',
    'buscafe.services',
    'buscafe.filters'
    ])

.run(function($ionicPlatform, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        $ionicPlatform.onHardwareBackButton(function(e) {
            if( $state.is('app.home') || $state.is('app.about')) {
                e.preventDefault();
                ionic.Platform.exitApp();
            }
        }, 100);
        $ionicPlatform.registerBackButtonAction(function(e) {
            if( $state.is('app.home') || $state.is('app.about')) {
                e.preventDefault();
                ionic.Platform.exitApp();
            }
        }, 101);
        
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider

    .state('intro', {
        url: '/intro',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'BuscafeController'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'about': {
                templateUrl: 'templates/about.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/intro');

    $ionicConfigProvider.navBar.alignTitle('center');
});
