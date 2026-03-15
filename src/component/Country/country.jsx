import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false)

    const handle = () => {
        setVisited(visited ? false : true)
    }

    return (
        <div className={`country ${visited && 'country-visired'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>population:{country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country" : "Small country"}</p>
            <button onClick={handle}>
                {visited ? "visited" : "notVisied"}
            </button>

        </div>
    );
};

export default Country;