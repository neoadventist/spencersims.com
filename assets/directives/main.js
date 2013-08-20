app.directive('roffset', function () {
	//retruns a random offset for the menu
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {	
			var offset= "offset"+Math.floor((Math.random()*6)+0);
			attrs.$set('class',offset+' '+attrs.class);
		}
	}
});
app.directive('expand', function () {
	//retruns a random offset for the menu
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			elem.on('click',function(){
				var oldclass=attrs.class;
				var newclass=oldclass.replace("span3","span6");
				attrs.$set('class',newclass);
			});
			
		}
	}
});