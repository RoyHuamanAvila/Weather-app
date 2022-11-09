/* import NavSearch from '../NavSearch'; */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { updateWeatherData } from '../../features/weather/weatherSlice';
import { getUserLocation } from '../../helpers';
import './styles.scss';

const ShowClime = () => {
    const weather = useSelector((state: RootState) => state.weather);
    const dispatch = useDispatch();
    const API_KEY = process.env.REACT_APP_API_KEY;

    const handleGetGeolocation = async () => {
        const coordinates = await getUserLocation().then(coordinates => {
            return coordinates;
        })

        const { lat, lon } = coordinates;
        const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => data);

        dispatch(updateWeatherData(fetchData));
    }

    return (
        <div className="content-showClime">
            {/* <NavSearch /> */}
            <header className='header-showClime'>
                <button className='button-search'>Search for places</button>
                <button onClick={handleGetGeolocation} className="button-location material-symbols-rounded">
                    my_location
                </button>
            </header>
            <div className='background-clouds'>
                <span className="material-symbols-rounded cloud">
                    cloud
                </span>
                <span className="material-symbols-rounded cloud">
                    cloud
                </span>
                <span className="material-symbols-rounded cloud">
                    cloud
                </span>
                <span className="material-symbols-rounded cloud">
                    cloud
                </span>
                <span className="material-symbols-rounded icon-clime-current">
                    rainy
                </span>
            </div>
            <div className='text-temp'>
                <p className='unit-temp'>{Math.round(weather.value.main.temp)}</p>
                <p className='centigrade-text'>°C</p>
            </div>
            <p className='clime-status'>{weather.value.weather[0].main}</p>
            <p className='date'>Today &middot; Fri, 5 Jun</p>
            <p className='location-icon'>
                <span className="material-symbols-rounded">
                    location_on
                </span>{weather.value.name}</p>
        </div>
    )
}

export default ShowClime;
