const weatherDiv = document.querySelector(".weather");
const citySpan = weatherDiv.querySelector("#city");
const temperSpan = weatherDiv.querySelector("#temperature");
const weatherSpan = weatherDiv.querySelector("#weather-condition");
const API_KEY = "443310866d1eee1bb4261312e2076a1f";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function generateUrl(lat, lon) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
}

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = generateUrl(lat, lon);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const temper = data.main.temp;
      const weather = data.weather[0].main;

      citySpan.innerText = city;
      temperSpan.innerText = temper;
      weatherSpan.innerText = weather;
      console.log(city, weather, temper);
      // console.log(data);
    });
  //alert("I found you!");
}
function onGeoError() {
  alert("Can't find you!");
}
