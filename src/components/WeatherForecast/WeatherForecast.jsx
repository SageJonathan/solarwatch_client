import { useState } from "react";
import axios from "axios";
import "./WeatherForecast.scss";
import undoIcon from "../../assets/icons/undo.png";

const baseUrl = import.meta.env.VITE_BASE_URL;

function WeatherForecast({ localCoordinates, advCoordinates, gpsCoordinates }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCoordinates = () => {
    console.log(localCoordinates, advCoordinates, gpsCoordinates);
    return localCoordinates || advCoordinates || gpsCoordinates || null;
  };

  const handleButtonClick = () => {
    const coordinates = getCoordinates();
    if (coordinates) {
      weatherApiCall(coordinates);
    } else {
      alert("Unable to find coordinates");
    }
  };

  const weatherApiCall = async (coordinates) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/forecastSearch`, {
        params: {
          lat: coordinates.latitude || coordinates.lat,
          lng: coordinates.longitude || coordinates.lng,
        },
      });

      setWeatherData(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
      console.log(weatherData);
    }
  };

  function handleToggleDisplay() {
    setWeatherData(null);
  }

  return (
    <>
      {!weatherData && (
        <button
          onClick={handleButtonClick}
          className="button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Access 5 day forecast"}
        </button>
      )}
      <div>
        {error && <p className="error">{error}</p>}
        {/* Title set outside of lower block due to style changes from mobile to larger screen */}
        {weatherData && (
          <div className="forecast__title-container">
            <img
              src={undoIcon}
              alt="toggle forecast"
              className="weather__toggle"
              onClick={handleToggleDisplay}
            />
            <h2 className="forecast__title">Forecast</h2>
          </div>
        )}
        {weatherData && (
          <div className="forecast">
            {weatherData.map((day, index) => (
              <div key={index} className="forecast__container">
                <h3 className="forecast__days">{day.day}</h3>
                <p className="forecast__header">
                  Temperature: {day.averageTemperature} °C
                </p>
                <p className="forecast__header">Weather: {day.weather}</p>
                <p className="forecast__header">
                  Visibility: {(day.averageVisibility / 1000)?.toFixed(2)}km
                </p>
                <p className="forecast__header">
                  Humidity: {day.averageHumidity}%
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherForecast;
