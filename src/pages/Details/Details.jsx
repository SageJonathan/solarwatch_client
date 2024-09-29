import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Solar from "../../components/SolarForecast/SolarForecast";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

function WeatherDetail() {
  const location = useLocation();
  const { solarData } = location.state;
  const { locationName } = location.state;
  const { localCoordinates } = location.state;
  const { advCoordinates } = location.state;
  const { gpsCoordinates } = location.state;
  return (
    <div className="container">
      <Solar
        solarData={solarData}
        locationName={locationName}
        advCoordinates={advCoordinates}
      />
      <CurrentWeather
        localCoordinates={localCoordinates}
        gpsCoordinates={gpsCoordinates}
        advCoordinates={advCoordinates}
      />
    </div>
  );
}

export default WeatherDetail;
