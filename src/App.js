import './App.css';
import WeatherBroadcast from './components/weather-broadcast/WeatherBroadcast';
import FiveDaysWeatherBroadcast from './components/weather-broadcast/five-days-weather-broadcast/FiveDaysWeatherBroadcast';
import TodayWeatherBroadcast from './components/weather-broadcast/today-weather-broadcast/TodayWeatherBroadcast';
import Attribution from './components/attribution/Attribution';

function App() {
  return (
    <div className='container'>
      <WeatherBroadcast />
      <FiveDaysWeatherBroadcast />
      <TodayWeatherBroadcast />
      <Attribution />
    </div>
  );
}

export default App;
