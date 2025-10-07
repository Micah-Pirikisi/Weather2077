import { fetchWeather } from "./api.js";
import { processWeatherData } from "./utils.js";

const form = document.getElementById("weather-form");
const input = document.getElementById("location-input");
const loading = document.getElementById("loading");
const display = document.getElementById("weather-display");
const locationEl = document.getElementById("location");
const weatherInfoEl = document.getElementById("weather-info");

function renderWeather(data) {
  locationEl.innerText = data.location;
  locationEl.setAttribute("data-text", data.location);
  weatherInfoEl.innerHTML = `
        <p>Temp: ${data.temperature}°C</p>
        <p>Condition: ${data.conditions}</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind: ${data.windspeed} km/h</p>
    `;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = input.value.trim();
  if (!location) return;

  display.classList.add("hidden");
  loading.classList.remove("hidden");

  try {
    const rawData = await fetchWeather(location);
    const cleanedData = processWeatherData(rawData);
    console.log("[Cleaned Weather Data]", cleanedData);
    renderWeather(cleanedData);
  } catch (e) {
    weatherInfoEl.innerHTML = "<p>Failed to load weather data.</p>";
  }

  loading.classList.add("hidden");
  display.classList.remove("hidden");
});
