app.controller('main', function ($scope, $timeout,$http,$filter) {
	$scope.randomVid = function (){
		videos =[	"http://www.convertro.com/sites/all/themes/custom/convertro/videos/crossing.webm",
					"http://www.convertro.com/sites/all/themes/custom/convertro/videos/rainydayNYC.webm"
				];
		num = videos.length; 
		vidId= Math.floor((Math.random()*num)+0);
		return videos[vidId];
	
	}
	console.log($scope.randomVid());
	$scope.randomVidURL=$scope.randomVid();
	$scope.start = "Welcome, My Name is Spencer Sims";
});
