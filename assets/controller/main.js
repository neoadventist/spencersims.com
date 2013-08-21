app.controller('main', function ($scope, $timeout,$http,$filter) {
	$scope.randomVid = function (){
		videos =[	"http://www.convertro.com/sites/all/themes/custom/convertro/videos/crossing.webm",
					"http://www.convertro.com/sites/all/themes/custom/convertro/videos/rainydayNYC.webm",
					"http://www.convertro.com/sites/all/themes/custom/convertro/videos/square.webm"
				];
		num = videos.length; 
		vidId= Math.floor((Math.random()*num)+0);
		return videos[vidId];
	
	}
	console.log($scope.randomVid());
	$scope.randomVidURL=$scope.randomVid();
	
	$scope.start = "Welcome, My Name is Spencer Sims";	
	$scope.meDetail =false;
	$scope.cvDetail =false;
	$scope.codeDetail =false;
	$scope.videoDetail =false;
	$scope.projectDetail =false;
	$scope.religionDetail =false;
	$scope.me="My Name is Spencer Sims. I'm a Front End Enginner in Los Angeles, CA";
	$scope.cv="You can view my CV HERE";
	$scope.code="You can check out my github HERE";
	$scope.videos="Subscribe to me on YouTube!";
	$scope.projects="You can see my recent projects HERE";
	$scope.religion="Check out my magazine HERE";
	
});
