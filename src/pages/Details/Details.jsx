import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import CurrentSolar from "../../components/CurrentSolar/CurrnetSolar";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeatherForecast from "../../components/WeatherForecast/WeatherForecast";

function WeatherDetail() {
  const location = useLocation();
  const { solarData } = location.state;
  const { locationName } = location.state;
  const { localCoordinates } = location.state;
  const { advCoordinates } = location.state;
  const { gpsCoordinates } = location.state;
  return (
    <div className="container">
      <div className="solar">
        <CurrentSolar
          solarData={solarData}
          locationName={locationName}
          advCoordinates={advCoordinates}
        />
      </div>
      <div className="weather">
        <CurrentWeather
          localCoordinates={localCoordinates}
          gpsCoordinates={gpsCoordinates}
          advCoordinates={advCoordinates}
        />
      </div>
      <div className="forecast">
        < WeatherForecast
          localCoordinates={localCoordinates}
          gpsCoordinates={gpsCoordinates}
          advCoordinates={advCoordinates}
        />
      </div>
    </div>
  );
}

export default WeatherDetail;
