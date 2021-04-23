import './App.css';
import WeatherBroadcast from './components/weather-broadcast/WeatherBroadcast';
import FiveDaysWeatherBroadcast from './components/weather-broadcast/five-days-weather-broadcast/FiveDaysWeatherBroadcast';
import TodayWeatherBroadcast from './components/weather-broadcast/today-weather-broadcast/TodayWeatherBroadcast';

function App() {
  return (
    <div className='container'>
      <WeatherBroadcast />
      <FiveDaysWeatherBroadcast />
      <TodayWeatherBroadcast />
    </div>
  );
}

export default App;
