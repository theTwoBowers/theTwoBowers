angular.module('rain.weather', [])

.controller('weatherControl', function($scope, Weather) {
  $scope.weather = Weather.get();
});