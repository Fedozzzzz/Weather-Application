import React from 'react';

const Weather = props =>(
    <div>
        {
            props.city &&
            <div>
                <p>City: {props.city}</p>
                <p>Country: {props.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Pressure: {props.pressure}</p>
                <p>Sunset: {props.sunset}</p>
            </div>
        }
        {
            props.error &&
            <p>{props.error}</p>
        }
    </div>
);


export default Weather;
