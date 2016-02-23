(function (Controllers, undefined) {
	Controllers.AccountCtrl = MyApp.Modules.starter.controller('AccountCtrl', ['$scope', function($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	}]);
})(MyApp.Controllers || {});