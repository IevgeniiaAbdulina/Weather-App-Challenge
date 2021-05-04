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
                    <div className='temperature-value'>15
                        <span className='symbol'>°C</span>
                    </div>
                    <div className='phrase-value'>Shower</div>
                </div>
                <div className='data'>
                    <div className='row-box'>
                        <div className='day'>Today</div>
                        <span className='divider'>.</span>
                        <div className='timestamp'>Fri, 5 Jun</div>
                    </div>
                    <div className='location'>
                        <span class="material-icons">place</span>
                        Helsinki
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherBroadcast;