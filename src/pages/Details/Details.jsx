import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Details.scss";
import Solar from "../../components/SolarForecast/SolarForecast";
import Weather from "../../components/WeatherForecast/WeatherForecast";

function WeatherDetail() {
    const location = useLocation();
    const { solarData } = location.state;
    const {locationName} = location.state;
    const {longitude} =location.state;
    const {latitude} =location.state;
    return (
       <div className='container'>
       <Solar solarData={solarData} locationName={locationName} longitude={longitude} latitude={latitude} />
       <Weather />
       </div>
        
    );
}

export default WeatherDetail;
