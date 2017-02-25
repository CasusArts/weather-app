$(document).ready(function () {
  //var geo = document.getElementById("geo");

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var html = '';

    var crd = pos.coords;
    var lat = crd.latitude;
    var lon = crd.longitude;

    var loc = [lat, lon];
    // var loc = {
    //   lat: lat,
    //   lon: lon
    // };



    html += "<strong>Lat:</strong> " + lat + " " + "<strong>Lon:</strong> " + lon;
    $('.location').html(html);

  }

  function getLocation() {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(showPosition);

    } else {
      geo.innerHTML = "<h3 class='alert'>Geolocation is not supportet by you'r browser</h3>";
    }
  }

  function error() {
    if (!navigator.geolocation) {
      $('.location').html('<h3>Can\'t get you\'r position.</h3>');
    }
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
})

