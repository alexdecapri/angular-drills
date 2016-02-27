var app = angular.module("arrayApp");

app.controller("arrayController", function($scope, service) {

  $scope.displayArr = service.myData;
  console.log($scope.displayArr);

});
