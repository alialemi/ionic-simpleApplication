(function (Controllers, undefined) {
	Controllers.ChatCtrl = MyApp.Modules.starter.controller('ChatsCtrl', ['$scope', 'ChatServices', function ($scope, ChatServices) {
        $scope.chats = ChatServices.all();
        
        $scope.remove = function(chat) {
            ChatServices.remove(chat);
        };
        
	}]);
})(MyApp.Controllers || {});