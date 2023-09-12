import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlages, setVisitedFlages] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[])

    const handleCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleFlages = (flag) => {
        const newFlag = [...visitedFlages, flag];
        setVisitedFlages(newFlag);
    } 


    return (
        <div>
            <h2>Countries : {countries.length} </h2>
            <div style={{textAlign: 'left'}}>
                <h3>Visited Countries : {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlages.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map((country) => <Country
                        country={country}
                        key={country.cca3}
                        handleCountry={handleCountry}
                        handleFlages={handleFlages}
                        >
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;