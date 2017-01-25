angular.module('rain', [
  'rain.services',
  'rain.weather',
  'ngRoute'
])

//TODO: client side routing
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/weather/weather.html',
    controller: 'weatherControl'
  })     
  .otherwise({  
    redirectTo: '/'  
  });    
}]);