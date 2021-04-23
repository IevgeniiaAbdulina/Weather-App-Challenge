import './WeatherBroadcast.css';
import CircleButton from '../circle-button/CircleButton';
import SearchPlaces from './search-places/SearchPlaces';

const WeatherBroadcast = () => {
    return ( 
        <header className="header">
            <SearchPlaces />
            <CircleButton />
        </header>
     );
}
 
export default WeatherBroadcast;