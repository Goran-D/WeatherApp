class Weather {
  constructor(city) {
    this.apiKey = 'e9176cae4c72e668165e0c669fed23c0';
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