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
        // Add conditional render through state 
        // Add toggle icon 
        <div className="forecast">
        <button onClick={handleButtonClick} className="">
            Get Weather Data
        </button>
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {weatherData && (
            <div className="">
                {weatherData.map((day, index) => (
                    <div key={index} className="">
                        <h3>{day.day}</h3>
                        <p>Temperature: {day.averageTemperature} °C</p>
                        <p>Weather {day.weather}</p>
                        <p>Visibility {day.averageVisibility} meters</p>
                        <p>Humidity:{day.averageHumidity}%</p>
                    </div>
                ))}
            </div>
        )}
    </div>
);
}

export default WeatherForecast;
