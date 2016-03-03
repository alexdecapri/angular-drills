var app = angular.module("app3");

app.controller("controller", function($scope, service) {

  $scope.people = service.myData;

});
