class ShowWeather {
  constructor(location) {
    this.location = document.getElementById(`location-${location}`);
    this.icon = document.getElementById(`icon-${location}`);
    this.temperature = document.getElementById(`temperature-${location}`);
    this.pressure = document.getElementById(`pressure-${location}`);
    this.humidity = document.getElementById(`humidity-${location}`);
    this.uvIndex = document.getElementById(`uv-index-${location}`);
  }

  show(weather) {
    this.location.textContent = weather.location.name;
    this.icon.setAttribute('src', weather.current.weather_icons);
    this.temperature.textContent = `Temperature: ${weather.current.temperature}°C`;
    this.pressure.textContent = `Pressure: ${weather.current.pressure} hPa`;
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
    this.uvIndex.textContent = `UV Index: ${weather.current.uv_index}`;
  }
}