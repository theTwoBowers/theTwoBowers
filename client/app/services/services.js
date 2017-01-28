angular.module('rain.services', [])

.factory('Weather', ['$http', function($http) {
  return {
    getWeatherByCoords: function(lat, lon) {
      return $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=07a96fec5d332a2798fa83aba696d9f2'
      }).then(function(resp) {
        return resp.data;
      });
    },

    getWeatherByCity: function(city) {
      return $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=07a96fec5d332a2798fa83aba696d9f2'
      }).then(function(resp) {
        return resp.data;
      });
    }  
  };
}])

.factory('Video', ['$http', function($http) {
  return {
    getVid: function(search) {
      var obj = {
        'Thunderstorm': ['storm', 'wind', 'thunderstruck'],
        'Drizzle': ['drizzle', 'melancholy', 'sad anime', 'rain song'],
        'Rain': ['sad', 'melancholy', 'sad anime', 'rain song'],
        'Clouds': ['chill', 'vaporwave', 'cloud rap', 'classical', 'final fantasy vii'],
        'Snow': ['cold', 'cold weather', 'christmas'],
        'Clear': ['salsa', 'brazilian jazz', 'bossa nova', 'nujabes'],
        'Extreme': ['extreme', 'fire', 'danger'],
        //TODO - throw something in here for 'Fog' and 'Mist'
        //'Fog': [],
        //'Mist': []
      };
      var queryStr = obj[search] || ['chill', 'vaporwave', 'cloud rap', 'classical', 'final fantasy vii'];
      var randomNum = function() {
        return Math.floor(Math.random() * (queryStr.length));
      };
      var randomGenre = queryStr[randomNum()];

      console.log(search); //the current weather type
      console.log(randomGenre); //the genre output by our obj

      return $http({
        method: 'GET',
        //url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true,
          key: 'AIzaSyBWzdeA8Kc4DD__k7IgNKTblq0dAMXm0xs',
          q: randomGenre + ' song',
          videoCategoryId: '10', //10 is the category for 'Music'
          videoDefinition: 'high', //all videos must be HD
          //videoDuration: 'short', //limits videos returned to 4mins
          maxResults: 20
        }
      }).then(function(resp) {
        return resp.data;
      });
    }
  };
}])

.factory('Comments', ['$http', function($http) {
  return {
    getComments: function() {
      return $http({
        method: 'GET',
        url: '/api/comments'
      }).then(function(resp) {
        return resp.data;
      });
    },
    
    postComments: function(data) {
      return $http({
        method: 'POST',
        url: '/api/comments',
        data: data
      }).then(function(resp) {
        return resp;
      });
    }
  };
}])

.factory('Users', ['$http', function($http) {
  return {
    getUser: function(userName) {
      console.log(userName);
      return $http({
        method: 'GET',
        url: '/api/users',
        params: userName
      }).then(function(resp) {
        return resp.data;
      });
    },

    createUser: function(user) {
      return $http({
        method: 'POST',
        url: '/api/users',
        data: user
      }).then(function(resp) {
        return resp;
      });
    },

    updateUser: function(user) {
      return $http({
        method: 'PUT',
        url: '/api/users',
        data: user
      }).then(function(resp) {
        return resp;
      });
    }
  };
}]);
