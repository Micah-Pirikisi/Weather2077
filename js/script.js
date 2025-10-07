import { fetchWeather } from "./api";
import { processWeatherData } from "./utils"; 

const form = document.getElementById('weather-form');
const input = document.getElementById('location-input');
const loading = document.getElementById('loading');
const display = document.getElementById('weather-display');
const locationEl = document.getElementById('location');
const weatherInfoEl = document.getElementById('weather-info');