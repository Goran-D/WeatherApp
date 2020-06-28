// Initialize weather object for hometown
const weatherHome = new Weather('Varazdin');

// Initialize weather object for workplace
const weatherWork = new Weather('Zagreb');

// Initialize UI
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
  getWeatherWork();

  document.getElementById('inputWork').value = '';
  document.getElementById('inputWork').blur();
  document.getElementById('btn-work').blur();
}