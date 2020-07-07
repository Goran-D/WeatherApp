// Initialize local storage
const locStorage = new LocStorage();

// Get stored cities from local storage
const weatherLocation = locStorage.getLocStorage();

// Initialize weather object for hometown
const weatherHome = new Weather(weatherLocation.home);

// Initialize weather object for workplace
const weatherWork = new Weather(weatherLocation.work);

// Initialize user interface
const showWeatherHome = new ShowWeather('home');
const showWeatherWork = new ShowWeather('work');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeatherHome);
document.addEventListener('DOMContentLoaded', getWeatherWork);

function getWeatherHome() {
  weatherHome.getWeather()
    .then(results => {
      showWeatherHome.show(results);
    })
    .catch(err => console.log(err));
}

function getWeatherWork() {
  weatherWork.getWeather()
    .then(results => {
      showWeatherWork.show(results);
    })
    .catch(err => console.log(err));
}

// Change locations
document.getElementById('btn-home').addEventListener('click', changeHome);
document.getElementById('btn-work').addEventListener('click', changeWork);

// Change home location
function changeHome(e) {
  e.preventDefault();

  const newHome = document.getElementById('inputHome').value;

  weatherHome.changeLocation(newHome);

  // Save home location in local storage
  let currentWork = document.getElementById('location-work').textContent;
  locStorage.setLocStorage(newHome, currentWork);

  getWeatherHome();

  document.getElementById('inputHome').value = '';
  document.getElementById('inputHome').blur();
  document.getElementById('btn-home').blur();
}

// Change work location
function changeWork(e) {
  e.preventDefault();

  const newWork = document.getElementById('inputWork').value;

  weatherWork.changeLocation(newWork);

  // Save work location in local storage
  let currentHome = document.getElementById('location-home').textContent;
  locStorage.setLocStorage(currentHome, newWork);

  getWeatherWork();

  document.getElementById('inputWork').value = '';
  document.getElementById('inputWork').blur();
  document.getElementById('btn-work').blur();
}