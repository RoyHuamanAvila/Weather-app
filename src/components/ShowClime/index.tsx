import './styles.scss';

const ShowClime = () => {
    return(
        <div className="content-showClime">
            <header className='header-showClime'>
                <button className='button-search'>Search for places</button>
                <button className="button-location material-symbols-rounded">
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
