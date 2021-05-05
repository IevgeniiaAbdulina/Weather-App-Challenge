import './paper.css';

const Paper = ({ name }) => {
    return ( 
        <div className={`paper ${name}`}>
            <p>Tomorrow</p>
            <img src='#' alt='icon' className='ic-weather' />
            <div className='min-max-temperature'>
                <p className='max-temperature'>{16}°C</p>
                <p className='min-temperature'>{11}°C</p>
            </div>
        </div>
     );
}
 
export default Paper;