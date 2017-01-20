angular.module('rain.weather', [])

.controller('weatherControl', function($scope, Weather) {

  $scope.getLocation = function() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    .then(function(geo) {
      return [geo.coords.latitude, geo.coords.longitude];
    })
    .then(function(loc) {
      Weather.get(loc[0], loc[1]).then(function(data) {
        $scope.weather = data.weather[0].main;
      });
    });
  }
  
});