app.directive('roffset', function () {
	//retruns a random offset for the menu
	return {
		restrict: 'A',
		scope:{
			subject:"@subject",
			detail:"@detail"
		},
		link: function (scope, elem, attrs) {	
			var offset= "offset"+Math.floor((Math.random()*6)+0);
			attrs.$set('class',offset+' '+attrs.class);
			
			elem.on('click',function(){
				var oldclass=attrs.class;
				var newclass=oldclass.replace("span3","span6");
				attrs.$set('class',newclass);
			});
			
		},
		template: '<div ng-init="a=0;" ng-click="a=!a"><h1>{{subject}}</h1><span class="detail" ng-show="a" ng-bind-html-unsafe="detail"></span></div>',
		replace:true
	}
});
app.directive('expand', function () {
	//retruns a random offset for the menu
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
		/*
			elem.on('click',function(){
				var oldclass=attrs.class;
				var newclass=oldclass.replace("span3","span6");
				attrs.$set('class',newclass);
			});
		*/
		}
	}
});