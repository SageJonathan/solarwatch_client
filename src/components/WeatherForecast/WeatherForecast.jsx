import { useState } from "react";
import axios from "axios";
import "./WeatherForecast.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function WeatherForecast({ localCoordinates, advCoordinates, gpsCoordinates }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCoordinates = () => {
    let coordinates;
    if (localCoordinates) {
      coordinates = localCoordinates;
    } else if (advCoordinates) {
      coordinates = advCoordinates;
    } else if (gpsCoordinates) {
      coordinates = gpsCoordinates;
    } else {
      alert("Unable to find coordinates");
    }

    return coordinates;
  };

  const handleButtonClick = () => {
    const coordinates = getCoordinates();
    if (coordinates) {
      weatherApiCall(coordinates);
    }
  };

  const weatherApiCall = async (coordinates) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/weatherSearch`, {
        params: {
          lat: coordinates.latitude,
          lng: coordinates.longitude,
          // Issue might be in the drilling. 3 seperate sources. 
        },
      });
      setWeatherData(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="button__contianer">
        <button
          className="button"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Access Weather Forecast"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather__data">
          <h2>Weather Forecast</h2>
          <p>Temperature: {weatherData.temperature} °C</p>
        </div>
      )}
    </>
  );
}

export default WeatherForecast;
