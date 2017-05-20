var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope)
{
	$scope.message="this is message controller";
}])
app.directive("myCustomerDetailsDirectives", function()
{
return {
	restrict: 'EACM',
	template: "<h1> this is custom directive</h1>",
	replace: true
}

})