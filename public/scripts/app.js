var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var html = '';

  const crd = pos.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;

  getWeather(lat, lon);

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

function getWeather(lat, lon) {

  const url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
  const request = new Request(url, {
    method: "GET",
    mode: "cors",
    redirect: "follow",
    headers: new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }),
  });

  fetch(request).then(data => {
    return data.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.error(err);
  });
}


window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
});
