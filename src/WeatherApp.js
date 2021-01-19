// import logo from './assets/weatherLogo.svg';
// import './WeatherApp.css';
import NavBar from './components/NavBar.js';
import CurrentWeather from './components/CurrentWeather.js';
import ForecastWeather from './components/ForecastWeather.js';

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <header className="WeatherApp-header">
        <NavBar />
        <CurrentWeather />
        <ForecastWeather />
      </header>
    </div>
  );
}

export default WeatherApp;
