
import { useState } from 'react';
import './Country.css'

const Country = ({country, handleCountry, handleFlages}) => {

    const [visited, setVisited] = useState(false);

    const click = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img style={{height: '150px', widows: '150px'}} src={country.flags.png} alt="" />
            <h3>Country : {country.name.common} </h3>
            <p>Capital : {country.capital} </p>
            <p>Area : {country.area} </p>
            <p>Population: {country.population}</p>
            <button onClick={() => handleCountry(country)} >Visited Country</button>
            <button onClick={() => handleFlages(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={click} >{visited ? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;