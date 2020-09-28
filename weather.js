class Weather {
  constructor(city) {
    this.apiKey = '6be72059c883f9c1ae2e192e2df5c629';
    this.city = city;
  }

  // Fetch weather data from Weatherstack API 
  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change location
  changeLocation(newCity) {
    this.city = newCity;
  }
}
