var app = angular.module('SPENCERSIMS', ['ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/main', {templateUrl: 'assets/view/main.html',controller:'main'}).
    when('/cv', {templateUrl: 'assets/view/cv.html',controller:'cv'}).
    when('/projects',{templateUrl: 'assets/view/projects.html',controller:'projects'}).
    otherwise({redirectTo: '/main'});
}]);