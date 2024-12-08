import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import CurrentSolar from "../../components/CurrentSolar/CurrentSolar";
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
    <div>
    <div className="container">
      <div className="Csolar">
        <CurrentSolar
          solarData={solarData}
          locationName={locationName}
          advCoordinates={advCoordinates}
        />
      </div>
      <div className="Cweather">
        <CurrentWeather
          localCoordinates={localCoordinates}
          gpsCoordinates={gpsCoordinates}
          advCoordinates={advCoordinates}
        />
      </div>
      <div className="Fweather">
        < WeatherForecast
          localCoordinates={localCoordinates}
          gpsCoordinates={gpsCoordinates}
          advCoordinates={advCoordinates}
        />
      </div>
    </div>
       <div className="Fweather-desktop">
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
