var app = angular.module("apiApp");
app.controller("controller", function($scope, service) {

  $scope.smurfGetter = function() {
    service.getSmurfs()
    .then(function(response) {
      console.log("response from controller:", response);
      $scope.smurfArr = response;
      // console.log($scope.smurfArr);
    })
  };
  $scope.smurfGetter();

});
