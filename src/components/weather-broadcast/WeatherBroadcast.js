import './WeatherBroadcast.css';
import CircleButton from '../circle-button/CircleButton';
import SearchPlaces from './search-places/SearchPlaces';

const WeatherBroadcast = () => {
    return ( 
        <div className='WeatherBroadcast'>
            <header className="WeatherBroadcast__header">
                <SearchPlaces />
                <CircleButton />
            </header>
            <div className='WeatherBroadcast__DataWrapper'>
                <div className='WeatherBroadcast__CurrentConditions'>
                    <div className='WeatherBroadcast__CurrentConditions__WeatherIcon'>weather icon</div>
                    <div className='WeatherBroadcast__CurrentConditions__TemperatureValue'>temperature</div>
                    <div className='WeatherBroadcast__CurrentConditions__PhraseValue'>broadcast</div>
                </div>
                <div className='WeatherBroadcast__Data'>
                    <div className='WeatherBroadcast__Data__day'>Day</div>
                    <div className='WeatherBroadcast__Data__timestamp'>data</div>
                    <div className='WeatherBroadcast__Data__location'>Location</div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherBroadcast;