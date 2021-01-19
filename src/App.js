import logo from './assets/weatherLogo.svg';
import './App.css';
import CurrentWeather from './components/CurrentWeather.js';
import ForecastWeather from './components/ForecastWeather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WEATHER APP</h1>
        <CurrentWeather />
        <ForecastWeather />
      </header>
    </div>
  );
}

export default App;
