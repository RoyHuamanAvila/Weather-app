import CardForecast from '../CardForecast';
import './styles.scss';

const Forecast = () => {
    return(
        <div className='forecast-container'>
            <div className='list-cards'>
                <CardForecast />
                <CardForecast />
                <CardForecast />
                <CardForecast />
                <CardForecast />  
            </div>
        </div>
    )
}

export default Forecast;
