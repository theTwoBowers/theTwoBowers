angular.module('rain.services', [])

//TODO: angular factories/services
.factory('Weather', function($http){
	return {
    get: function() {
      console.log('WHAT');
      return $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=SF&cnt=7&units=imperial&appid=07a96fec5d332a2798fa83aba696d9f2'
      }).then(function(resp) {
        console.log(resp.data);
        return resp.data;
      });
    }
  }
})