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
	$scope.randomFontFcn = function(){
		fonts = ["Comfortaa","Luckiest+Guy","Righteous","Open+Sans"];
		num = fonts.length; 
		fontId= Math.floor((Math.random()*num)+0);
		return fonts[fontId]
	}
	$scope.randomFont=$scope.randomFontFcn();
	$scope.start = "Welcome, My Name is Spencer Sims";	

	$scope.me="<div>My Name is Spencer Sims.</div> <div>I'm a Front End Enginner in Los Angeles, CA</div><div><div>Find Me On:<ul>  <li><a href='http://spencersims.com/facebook'>Facebook</a></li>  <li><a href='http://spencersims.com/twitter'>Twitter</a></li>  <li><a href='http://spencersims.com/+'>G+</a></li>  <li><a href='http://spencersims.com/strava'>Strava</a></li>  <li><a href='http://spencersims.com/github'>GitHub</a></li>  <li><a href='http://spencersims.com/linkedin'>Linked-In</a></li>  <li><a href='http://spencersims.com/youtube'>Youtube</a></li></ul></div><br>";
	$scope.cv="PDF | Linked-In";
	$scope.code="You can check out my <a href='http://spencersims.com/github'>github HERE</a>";
	$scope.videos="Subscribe to me on <a href='http://spencersims.com/youtube'>YouTube</a>!";
	$scope.projects="You can see my recent projects HERE";
	$scope.religion="Check out my magazine <a href='http://eyesofreason.com'>HERE</a>";
	
});
