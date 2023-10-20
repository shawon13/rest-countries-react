import React from 'react';
import './Country.css'
const Country = (props) => {
    const { flags, name, region } = props.country;
    return (
        <div>
            <div className="country">
                <img src={flags.png} alt="..." />
                <div className="card-body">
                    <h2>{name.common}</h2>
                    <h3>Region: {region}</h3>
                </div>
            </div>
        </div>
    );
};

export default Country;