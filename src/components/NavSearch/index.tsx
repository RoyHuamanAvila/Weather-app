import './styles.scss';

const NavSearch = () => {
    return(
        <div className="navSearch-container">
            <button>x</button>
            <div className='search'>
                <div className='input-search'>
                    <span className="material-symbols-rounded">
                    search
                    </span>
                    <input type="text" name='location' placeholder='search location'/>
                </div>
                <button className='btn-search'>Search</button>
            </div>
            <LocationItem name='London'/>
            <LocationItem name='Barcelona'/>
            <LocationItem name='Long Beach'/>
        </div>
    )
}

interface locationProps {
    name: string
}

const LocationItem = ({name}: locationProps) => {
    return(
        <div className='location-item'>
            <p>{name}</p>
        </div>
    )
}


export default NavSearch;
