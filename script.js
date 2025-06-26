const apiLink = "https://api.weatherapi.com/v1/current.json";
const apiKey = "key=dc238d9948374f76aa680802252306";

const input = document.getElementById("input");
const button = document.getElementById("btn");
const details = document.querySelectorAll("li");
const weatherDetails = document.getElementById("weatherDetails");
const image = document.getElementById("image");
const condition = document.getElementById("condition");

button.addEventListener("click", () => {
  let city = input.value;
  input.value = "";

  let totalApiLink = `${apiLink}?${apiKey}&q=${city}&aqi=yes`;
  // http://api.weatherapi.com/v1/current.json?key=dc238d9948374f76aa680802252306&q=London&aqi=yes

  fetch(totalApiLink)
    .then((res) => res.json())
    .then((data) => {
      
      details[0].innerText = `${data.location.name}, ${data.location.country}`;
      details[1].innerText = `Temp: ${data.current.temp_c} °C`;
      image.src = data.current.condition.icon;
      condition.innerText = data.current.condition.text;
      details[3].innerText = `Wind Speed: ${data.current.wind_kph} kph`;
      details[4].innerText = `Updated On: ${data.location.localtime}`
    })
    .catch((e) => {
      alert("Please enter currect city name");
    });
});
