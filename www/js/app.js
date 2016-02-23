(function (MyApp, undefined) {

	MyApp.version = "0.0.0.1";
	MyApp.partialsPath = "partials/";
	MyApp.Factory = {};
	MyApp.Modules = {};
	MyApp.Configs = {};
	MyApp.Controllers = {};
	MyApp.Directives = {};

})(window.MyApp = window.MyApp || {});
(function (Modules, undefined) {

	// Ionic Starter App
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.services' is found in services.js
	// 'starter.controllers' is found in controllers.js
	Modules.starter = angular.module('starter', ['ionic']);
})(MyApp.Modules = MyApp.Modules || {});
(function (Configs, undefined) {
  Configs.starter = MyApp.Modules.starter.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider
    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  }]);

})(MyApp.Configs || {});


(function (Controllers, undefined) {
	Controllers.AccountCtrl = MyApp.Modules.starter.controller('AccountCtrl', ['$scope', function($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	}]);
})(MyApp.Controllers || {});
(function (Controllers, undefined) {
	Controllers.ChatCtrl = MyApp.Modules.starter.controller('ChatsCtrl', ['$scope', 'ChatServices', function ($scope, ChatServices) {
        $scope.chats = ChatServices.all();
        
        $scope.remove = function(chat) {
            ChatServices.remove(chat);
        };
        
	}]);
})(MyApp.Controllers || {});
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
(function (Controllers, undefined) {
	Controllers.DashCtrl = MyApp.Modules.starter.controller('DashCtrl', ['$scope', function ($scope) {
		
	}]);
})(MyApp.Controllers || {});
(function (Services, undefined) {
    Services.Chats = MyApp.Modules.starter.factory('ChatServices', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }];

      return {
        all: function() {
          return chats;
        },
        remove: function(chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
      }
  });

})(MyApp.Services || {});
(function (Modules, undefined) {
    Modules.starter.run(['$ionicPlatform', function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    }]);
})(MyApp.Modules || {});