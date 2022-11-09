import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './styles.scss';

const Highlights = () => {
    const weather = useSelector((state: RootState) => state.weather.value);


    return (
        <div className='highligths-container'>
            <p>Today's Highlights</p>
            <div className="highlights-list">
                <HighlightCard title='Wind status' highlight={Math.round(weather.wind.speed)} unit='m/s'>
                    <p>WSW</p>
                </HighlightCard>
                <HighlightCard title='Humidity' highlight={weather.main.humidity} unit='%'>
                    <div className='measurer'>
                        <span>0</span><span>50</span><span>100</span>
                    </div>
                    <div className="bar-border">
                        <div className="bar-progress" style={{ width: `${weather.main.humidity}%` }}></div>
                    </div>
                </HighlightCard>
                <HighlightCard title='Visibility' highlight={`${weather.visibility}`} unit=' m' />
                <HighlightCard title='Air Pressure' highlight={weather.main.pressure} unit=' mb' />
            </div>
        </div>
    )
}

interface HLProps {
    title: string,
    highlight: number | string,
    unit: string,
    children?: ReactNode
}

const HighlightCard = ({ title, highlight, unit, children }: HLProps) => {
    return (
        <div className="card-hl">
            <p>{title}</p>
            <p className='card-important-data'><span>{highlight}</span>{unit}</p>
            {
                children
            }
        </div>
    )
}

export default Highlights;
