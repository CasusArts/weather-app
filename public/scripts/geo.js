var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(position) {
  return {
    lat: position.coord.latitude,
    lon: position.coord.longitude
  };
}

function error(err) {
  console.warn("ERROR: " + err.code + " : " + err.message);
}

var geo = navigator.geolocation.getCurrentPosition(success, error, options);
