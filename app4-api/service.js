var app = angular.module("apiApp");
 app.service("service", function($http) {

   this.getSmurfs = function() {
     return $http({
       method: "GET",
       url: "http://smurfs.devmounta.in/smurfs/"
     })
     .then(function(response) {
       return response.data;
     })
     .catch(function(err) {
       console.error("The error is", err);
     })
   }

 });
