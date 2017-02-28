$(document).ready(function () {
  //var geo = document.getElementById("geo");

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var html = '';
    const API_KEY = 'a8f6d380da1dc07ada4a449108144813';

    var crd = pos.coords;
    var lat = crd.latitude;
    var lon = crd.longitude;

    var loc = [lat, lon];

    // const weahter = $.get(
    //   "https://api.darksky.net/forecast/" + encodeURI(API_KEY)  + '/' + encodeURI(lat) + ',' + encodeURI(lon)
    // );

    const weather = $.getJSON('../data/city.list.json', function (json) {
      // return json;
    });

    console.log(weahter);
    html += "<strong>Lat:</strong> " + lat + " " + "<strong>Lon:</strong> " + lon;
    $('.location').html(html);
  }

  function error() {
    if (!navigator.geolocation) {
      $('.location').html('<h3>Can\'t get you\'r position.</h3>');
    } else if (!navigator.permission) {
      $('.location').html('<h3>Please permit using geolocation service in browser.</h3>');
    }
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
});
