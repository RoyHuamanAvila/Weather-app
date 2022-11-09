/* import NavSearch from '../NavSearch'; */
import { useEffect, useState } from 'react';
import { getUserLocation } from '../../helpers';
import './styles.scss';

import type { wheater } from '../../types';

const ShowClime = () => {
    const [coordinates, setCoordinates] = useState([0, 0]);
    const [dataWheater, setdataWheater] = useState<wheater>();
    const API_KEY = process.env.REACT_APP_API_KEY;

    const handleGetGeolocation = () => {
        getUserLocation().then(coordinates => {
            setCoordinates(coordinates);
        })

        updateDataLocation();
    }

    const updateDataLocation = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data: wheater) => setdataWheater(data));
    }


    return (
        <div className="content-showClime">
            {/* <NavSearch /> */}
            <p>{coordinates}</p>
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
                <p className='unit-temp'>15</p>
                <p className='centigrade-text'>°C</p>
            </div>
            <p className='clime-status'>Shower</p>
            <p className='date'>Today &middot; Fri, 5 Jun</p>
            <p className='location-icon'>
                <span className="material-symbols-rounded">
                    location_on
                </span> Helsinki</p>
        </div>
    )
}

export default ShowClime;
