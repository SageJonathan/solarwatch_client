import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Details.scss";
import Solar from "../../components/SolarForecast/SolarForecast";
import Weather from "../../components/WeatherForecast/WeatherForecast";

function WeatherDetail() {
    const location = useLocation();
    const { solarData } = location.state;

    return (
       <div className='container'>
       <Solar solarData={solarData} />
       <Weather />
       </div>
        
    );
}

export default WeatherDetail;
