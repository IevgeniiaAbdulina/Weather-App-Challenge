import Paper from '../../paper/Paper';
import './FiveDaysWeatherBroadcast.css';

const FiveDaysWeatherBroadcast = () => {
    return ( 
        <div className='five-days-weather-broadcast'>
            <Paper />
            <Paper />
            <Paper />
            <Paper />
            <Paper />
            {/* invisible */}
            <Paper name='hidden' /> 
        </div>
     );
}
 
export default FiveDaysWeatherBroadcast;