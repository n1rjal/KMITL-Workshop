const API_KEY = "e05227349d5070e14d5fe78ef5d44b4e";
const LOCATION_INFO = {
  lat: "27.7172",
  lng: "85.3240",
};

const conditionSpan = document.getElementById("condition");
const weatherInfoDiv = document.getElementById("weatherInfo");
const placeH1 = document.querySelector(".place_name");
const imageContainer = document.querySelector(".image_container");
const inputElement = document.getElementById("city_input");
const citySearchConfirmButton = document.getElementById("city_search_confirm");
const imageIconTag = document.getElementById("icon_for_weather");

const URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" +
  LOCATION_INFO.lat +
  "&lon=" +
  LOCATION_INFO.lng +
  "&appid=" +
  API_KEY;

let loading = true;
let data = {};
let err = null;

const searchWeatherForTheCity = async () => {
  try {
    const citySearchingFor = inputElement.value;
    localStorage.setItem("city", citySearchingFor);
    const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchingFor}&appid=${API_KEY}&units=metric`;
    await setWeather(SEARCH_URL);
  } catch (e) {
    console.log(e);
    throw err;
  }
};

citySearchConfirmButton.onclick = searchWeatherForTheCity;

const setWeather = async (URL) => {
  const res = await fetch(URL);
  if (res.status !== 200) {
    alert("City not found");
    return null;
  }
  data = await res.json();
  err = null;
  loading = false;
  const description = data.weather[0].description;
  const imageIcon = data.weather[0].icon;
  const main = data.weather[0].main;
  const cityName = data.name;
  const temp = data.main.temp;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;

  weatherInfoDiv.innerHTML = `
    <div>
        Max: ${maxTemp}
    </div>
    <div>
        Min: ${minTemp}
    </div>
    <div>
        Humidity: ${humidity}
    </div>
    <div>
        Pressure: ${pressure}
    </div>
    `;

  const imageURL = `http://openweathermap.org/img/wn/${imageIcon}@2x.png`;
  conditionSpan.innerText = main + " - " + description;

  // we will need to create an image tag in the html
  // using JS

  imageIconTag.src = imageURL;

  placeH1.innerText = `${cityName} - ${temp}°C`; // template string
};

const getWeather = async () => {
  try {
    // from localstorage
    const citySearchingFor = localStorage.getItem("city");
    console.log({ citySearchingFor });
    if (!citySearchingFor) return;
    const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchingFor}&appid=${API_KEY}&units=metric`;
    await setWeather(SEARCH_URL);
  } catch (e) {
    data = null;
    loading = false;
    err = e.message;
    throw e;
  }
};

getWeather();
