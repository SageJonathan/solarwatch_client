
import React from 'react';
import { useLocation } from 'react-router-dom';

import "./WeatherDetails.scss";

function WeatherDetail() {
    const location = useLocation();
    const { weatherData } = location.state;

    return (
        <section className="main">
            <div className="main__heading">
                <h1 className="main__head-detail">
                    Sunrise and Sunset 
                </h1>
            </div>

            <div className="main__information">
                <div className="main__sunrise" id="main__modifier">
                    <h3 className="main__sunrise-head">
                        SUNRISE
                    </h3>
                    <p className="main__sunrise-time" id="main__modifier3">
                        {weatherData.sunrise}
                    </p>
                </div>

                <div className="main__sunset" id="main__modifier">
                    <h3 className="main__sunset-head" id="main__modifier2">
                        SUNSET
                    </h3>
                    <p className="main__sunset-time" id="main__modifier3">
                        {weatherData.sunset}
                    </p>
                </div>

                <div className="main__sunlight-hours" id="main__modifier">
                    <h3 className="main__sunlight-hours-head" id="main__modifier2">
                        HOURS
                    </h3>
                    <p className="main__sunlight-hours-time" id="main__modifier3">
                        {weatherData.day_length}
                    </p>
                </div>
            </div>

            <div className="main__weather-forecast">
                <h3 className="main__forecast-head" id="main__modifier2">
                    WEATHER FORECAST
                </h3>

                <div className="main__forecast-container" id="main__modifier2">
                    {/* <p className="main__forecast-celsius" id="main__modifier3">
                        17
                    </p>  */}
                    <p className="main__forecast-detail" id="main__modifier3">
                        {weatherData.weather}
                    </p>  
                </div>        
            </div>
        </section>
    );
}

export default WeatherDetail;
