import { ReactNode } from 'react';
import './styles.scss';

const Highlights = () => {
    return(
        <div className='highligths-container'>
            <p>Today's Highlights</p>
            <div className="highlights-list">
                <HighlightCard title='Wind status' highlight={7} unit='mph'>
                    <p>WSW</p>
                </HighlightCard> 
                <HighlightCard title='Humidity' highlight={84} unit='%'>
                    <div className='measurer'>
                        <span>0</span><span>50</span><span>100</span>
                    </div>
                    <div className="bar-border">                    
                        <div className="bar-progress" style={{width: '84%'}}></div>
                    </div>
                </HighlightCard>
                <HighlightCard title='Visibility' highlight='6,4' unit=' miles' />
                <HighlightCard title='Air Pressure' highlight={998} unit=' mb' />
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

const HighlightCard = ({title, highlight, unit, children} : HLProps) => {
    return(
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
