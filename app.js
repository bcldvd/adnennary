(function() {
  'use strict';
	angular
			.module('app', [])
			.controller('MainController', MainController);

	function MainController($scope) {
      blockspring.runParsed("4f791c674f8ef3c0b80d28d2042eb6d4", {cache: false }, function(res){
        console.log(res.params);
        $scope.adnennary = res.params.adnennary;
        $scope.$apply();
      });
	}
	
	
})();