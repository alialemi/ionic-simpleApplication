(function (Controllers, undefined) {
	Controllers.ChatDetailCtrl = MyApp.Modules.starter.controller(
      'ChatDetailCtrl', [
        '$scope',
        '$stateParams',
        'ChatServices',

        function($scope, $stateParams, ChatServices) {
    	  var Chats = $scope.Chats;
    	  $scope.chat = ChatServices.get($stateParams.chatId);


      }]);
})(MyApp.Controllers || {});