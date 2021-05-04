import './WeatherBroadcast.css';
import CircleButton from '../circle-button/CircleButton';
import SearchPlaces from './search-places/SearchPlaces';

const WeatherBroadcast = () => {
    return ( 
        <div className='weather-broadcast'>
            <header className="header">
                <SearchPlaces />
                <CircleButton />
            </header>
            <div className='data-wrapper'>
                <div className='current-conditions'>
                    <div className='weather-icon'>weather icon</div>
                    <div className='temperature-value'>temperature</div>
                    <div className='phrase-value'>broadcast</div>
                </div>
                <div className='data'>
                    <div className='day'>Day</div>
                    <div className='timestamp'>data</div>
                    <div className='location'>Location</div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherBroadcast;