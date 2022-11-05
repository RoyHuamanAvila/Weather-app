import './styles.scss';

const CardForecast = () => {
    return(
        <div className='card-container'>
            <p className='card-date'>Sun, 7 Jun</p>
            <span className="material-symbols-rounded card-icon-clime">
                partly_cloudy_day
            </span>
            <div className="temperature">
                <p>16°C</p>
                <p>11°C</p>
            </div>
        </div>
    )
}

export default CardForecast;
