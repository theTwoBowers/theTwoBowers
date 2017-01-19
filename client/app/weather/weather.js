angular.module('rain.weather', [])

.controller('weatherControl', function($scope, Weather) {
	
  Weather.get().then(function(weather){
  	$scope.weather = weather;
  })
});