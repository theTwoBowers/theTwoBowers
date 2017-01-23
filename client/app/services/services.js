angular.module('rain.services', [])

//TODO: angular factories/services
.factory('Weather', function($http) {

  return {
    get: function(lat, lon) {
      return $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=07a96fec5d332a2798fa83aba696d9f2'
      }).then(function(resp) {
        return resp.data;
      });
    }      
  };
})


.factory('Video', function($http) {
  return {
    getVid: function(search) {
      // make object play genre based on weather
      var obj = {
        'Rain': 'sad',
        'Clouds': 'chill'
      };
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true,
          key: 'AIzaSyBWzdeA8Kc4DD__k7IgNKTblq0dAMXm0xs',
          q: obj[search],
          maxResults: 10
        }
      }).then(function(resp) {
        return resp.data;
      });
    }
  };
});
