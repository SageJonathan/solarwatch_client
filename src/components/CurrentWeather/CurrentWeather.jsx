import { useState } from "react";
import axios from "axios";
import "./CurrentWeather.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function CurrentWeather({ localCoordinates, advCoordinates, gpsCoordinates }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function capitalizeWords(str) {
    return str
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(" "); 
  }
  
  const getCoordinates = () => {
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
      const response = await axios.get(`${baseUrl}/weatherSearch`, {
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
    }
  };

  const weatherInfo = weatherData ? [
    { label: "Temperature", value: `${weatherData.temperature} °C` },
    { label: "Feels Like", value: `${weatherData.feels_like} °C` },
    { label: "Wind Speed", value: `${weatherData.wind_speed} m/s` },
    { label: "Humidity", value: `${weatherData.humidity}%` },
    { label: "Visibility", value: `${(weatherData.visibility / 1000)?.toFixed(2)} km` },
    { label: "Pressure", value: `${weatherData.pressure} hPa` },
    { label: "Cloudiness", value: `${weatherData.cloudiness}%` },
    { label: "Rain (last 1h)", value: weatherData.rain ? `${weatherData.rain['1h']} mm` : "No rain" },
  ] : [];

  const rows = [];
  for (let i = 0; i < weatherInfo.length; i += 2) {
      rows.push(weatherInfo.slice(i, i + 2));
  }

  return (
    <>
        {!weatherData && (
        <div className="button__container">
          <button
            className="button"
            onClick={handleButtonClick}
            disabled={loading}
          >
            {loading ? "Loading..." : "Access Live Weather"}
          </button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather">
          <div className="weather__header-container">
          <h2 className="weather__header">Weather</h2>
          <p className="data__info">{capitalizeWords(weatherData.weather)}</p>
          </div>
          <div className="data">
          {rows.map((row, index) => (
          <div className="data__row data__row--weather" key={index}>
            {row.map((info) => (
              <div className="data__container data__container--weather" key={info.label}>
                <h3 className="data__header data__header--weather">{info.label}</h3>
                <p className="data__info">{info.value}</p>
              </div>
            ))}
            </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeather;



