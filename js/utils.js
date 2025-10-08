export function processWeatherData(data) {
  const current = data.currentConditions;

  // next 12 hours from the first day
  const hourly = data.days[0].hours.slice(0, 12).map((hour) => ({
    time: hour.datetime,
    temp: hour.temp,
    condition: hour.conditions,
  }));

  return {
    location: data.resolvedAddress,
    temperature: current.temp,
    conditions: current.conditions,
    humidity: current.humidity,
    windspeed: current.windspeed, 
    hourlyForecast: hourly 
  };
}

export function getIconForCondition(condition) {
  const conditionMap = {
    Clear: "../assets/streamline-ultimate--weather-sun-bold.svg",
    "Partially cloudy": "../assets/arcticons--weather.svg",
    Cloudy: "../assets/fluent--weather-cloudy-24-regular.svg",
    Rain: "../assets/wi--rain-wind.svg",
    Showers: "../assets/arcticons--weather-alt-2.svg",
    Snow: "../assets/wi--snowflake-cold.svg",
    Fog: "../assets/fluent--weather-haze-48-regular.svg",
    Thunderstorm: "../assets/wi--thunderstorm.svg",
  };

  const iconFile =
  conditionMap[condition] || "streamline-ultimate--weather-sun-bold.svg";
  return `./assets/${iconFile}`;
}
