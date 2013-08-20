app.directive('roffset', function () {
	//retruns a random offset for the menu
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {	
			var offset= "offset"+Math.floor((Math.random()*6)+0);
			attrs.$set('class',offset+' span3 lguyFont menu');
			console.log("Recognized the random offset directive usage");
		}
	}
});