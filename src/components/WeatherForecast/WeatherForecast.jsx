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
            console.log(weatherData)
        }
    };

    return (
        <div className="weather-forecast">
        <button onClick={handleButtonClick} className="fetch-weather-button">
            Get Weather Data
        </button>

        {loading && <div className="loading">Loading...</div>}

        {error && <div className="error">{error}</div>}

        {/* Display the weather data for the next 4 days */}
        {weatherData && (
            <div className="weather-info">
                {weatherData.map((day, index) => (
                    <div key={index} className="weather-day">
                        <h3>{day.day}</h3>
                        <p><strong>Average Temperature:</strong> {day.averageTemperature} °C</p>
                        <p><strong>Weather:</strong> {day.weather}</p>
                        <p><strong>Average Visibility:</strong> {day.averageVisibility} meters</p>
                        <p><strong>Average Humidity:</strong> {day.averageHumidity}%</p>
                    </div>
                ))}
            </div>
        )}
    </div>
);
}

export default WeatherForecast;
