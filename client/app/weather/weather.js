angular.module('rain.weather', [])

.controller('weatherControl', function($scope, $sce, Weather, Video, $window) {

  var shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var getPlaylist = function(weather) {
    Video.getVid(weather).then(function(data){
      shuffle(data.items);
      $scope.playlist = data.items;
      var playlist = data.items.map(function(item){
        return item.id.videoId;
      });
      var firstVid = playlist.shift();
      playlist = playlist.join(',');
      $scope.data = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + firstVid + '?playlist=' + playlist + '&autoplay=1&loop=1');
    });
  }

  $scope.getWeatherByInput = function() {
    Weather.getWeatherByCity($scope.city).then(function(data) {
      //console.log(data.list);
      getPlaylist(data.list[0].weather[0].main);
    });    
  }

  $scope.getWeatherGeoLocation = function() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    .then(function(geo) {
      return [geo.coords.latitude, geo.coords.longitude];
    })
    .then(function(loc) {
      Weather.getWeatherByCoords(loc[0], loc[1]).then(function(data) {
        getPlaylist(data.weather[0].main);
      });
    });
  };

  $scope.playlistClick = function(item, playlist) {
    var temp = playlist.map(function(item){
      return item.id.videoId;
    })
    temp.splice(temp.indexOf(item), 1);
    $scope.data = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + item.id.videoId + '?playlist=' + temp + '&autoplay=1&loop=1');
  }
});