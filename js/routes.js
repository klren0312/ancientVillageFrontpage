app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/goto', {
            templateUrl: 'goto.html'
        })
        .when('/onroad', {
            templateUrl: 'onroad.html'
        })
        .when('/cl', {
            templateUrl: 'cl.html'
        })
        .when('/extends', {
            templateUrl: 'extends.html'
        })
        .when('/talking', {
            templateUrl: 'talking.html'
        })
        .when('/share', {
            templateUrl: 'share.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .when('/contract', {
            templateUrl: 'contract.html'
        })
}])