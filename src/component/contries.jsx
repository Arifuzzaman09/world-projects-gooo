import React, { use } from 'react';
import Country from './Country/country';
import './Country/contries.css'

const Contries = ({ contriesPromise }) => {
    const contriesData = use(contriesPromise)
    const countries = contriesData.countries;

    return (
        <div>
            <h1>In the contries :{countries.length}</h1>
            <div className='contries'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Contries;