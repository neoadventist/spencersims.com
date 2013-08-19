var app = angular.module('SPENCERSIMS', ['ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/main', {templateUrl: 'assets/view/main.html',   controller: 'main'}).
	  when('/download', {templateUrl: 'assets/view/download.html',   controller: 'download'}).
	  otherwise({redirectTo: '/main'});
}]);


