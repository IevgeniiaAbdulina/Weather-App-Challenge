import './TodayWeatherBroadcast.css'

const TodayWeatherBroadcast = () => {
    return ( 
        <div className='today-weather-broadcast'>
            <p className='hightlights-title'>Today's Hightlights</p>

            <div className='hightlights-paper'>
                <p className='paper-title'>Wind status</p>
                <p className='paper-value'>
                    {7}
                    <span> mph</span>
                </p>
                <p className='direction'>
                    <div className='navigation-icon'>
                        <span class="material-icons md-12">navigation</span>
                    </div>
                    wsw
                </p>
            </div>

            <div className='hightlights-paper'>
                <p className='paper-title'>Humidity</p>
                <p className='paper-value'>
                    {84}
                    <span> %</span>
                </p>
                <p className='progress-bar'>0-100%</p>
            </div>

            <div className='hightlights-paper'>
                <p className='paper-title'>Visibility</p>
                <p className='paper-value'>
                    {6.4}
                    <span> miles</span>
                </p>
            </div>

            <div className='hightlights-paper'>
                <p className='paper-title'>Air pressure</p>
                <p className='paper-value'>
                    {998}
                    <span> mb</span>
                </p>
            </div>
        </div>
     );
}
 
export default TodayWeatherBroadcast;