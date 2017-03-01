// const weather = function (lan, lon) {
//   this.lan = lan;
//   this.lon = lon;
//
//   const lang = navigator.language;
//   const settings = {
//     "url": "https://community-open-weather-map.p.mashape.com/weather?callback=weatherdata?" + lang + "&lat=" + lat + "&lon=" + lon + "q=q?units=metric&APPID=7365a15a8446e775127e7f852435d16f",
//     "method": "GET",
//     "header": {
//       "X-Mashape-Key": "P319rwetHomshMk3cmoB2FmDJkPFp174LS7jsnqrvgi4RdpfWE",
//       "accept": "application/json"
//     }
//   }
//
//   $.ajax(settings).done(function (json) {
//     console.log(json);
//   });
// }

$(document).ready(function () {

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var html = '';
    //const API_KEY = 'a8f6d380da1dc07ada4a449108144813';

    var crd = pos.coords;
    var lat = crd.latitude;
    var lon = crd.longitude;

    const lang = navigator.language;
    const settings = {
      "url": "https://community-open-weather-map.p.mashape.com/weather?callback=weatherdata?" + lang + "&lat=" + lat + "&lon=" + lon + "&q=q&units=metric&APPID=7365a15a8446e775127e7f852435d16f",
      "method": "GET",
      "header": {
        "X-Mashape-Key": "wfwWLSXQeqmshrbvVrM8uHmO1wtKp1x0LSbjsnVZNTyJr6IhCx",
        "accept": "application/json"
      }
    }

    $.ajax(settings).done(function (json) {
      console.log(json);
    });
    //var loc = [lat, lon];

    // const settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://api.darksky.net/forecast/" + encodeURI(API_KEY + '/' + lat + ',' + lon),
    //   "method": "GET",
    //   "header": {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "accept": "application/json",
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // }
    //
    //
    // $.ajax(settings).done(function (json) {
    //   console.log(json);
    // });

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
