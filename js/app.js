var app = angular.module('blocChat', []);

 app.controller("chatController", function($scope) {
     $scope.currentUser = "John"
     $scope.chatRooms = ['Social Media Lovers', 'Health Starts Here', 'Developers']
     $scope.chatters = [{name:'Ricardo Garcia', onlineStatus: true}, {name:'Manuel Martinez', onlineStatus: false}]
     $scope.newRoom = function() {
         alert('new Room click');
     }
     
     $scope.messages = [{name:'Ricardo Garcia', text:'Hello'}]
     
     $scope.addMessage = function() {
       $scope.messages.push({name:$scope.currentUser, text:$scope.currentMessage }) 
     }
     
     $scope.createRoom = function() {
      $scope.chatRooms.push($scope.newChannel)
      $scope.showCreate = false;
     }
     

 }) 
 
 