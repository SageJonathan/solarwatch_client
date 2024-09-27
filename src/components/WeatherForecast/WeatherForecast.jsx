import "./WeatherForecast.scss";

function WeatherForecast ({localCoordinates,advCoordinates,gpsCoordinates}){
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

    // const weatherApiCall = async (coordinates) => {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const response = await axios.get(`your_weather_api_endpoint`, {
    //             params: {
    //                 lat: coordinates.latitude, // Use correct property names here
    //                 lng: coordinates.longitude
    //             }
    //         });
    //         setWeatherData(response.data); // Assuming the response contains weather data
    //     } catch (err) {
    //         console.error("Error fetching weather data:", err);
    //         setError("Failed to fetch weather data. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <>
        <div className="button__contianer">
        <button 
        className="button"
         onClick={handleButtonClick} 
        // disabled={loading}
        > 
        Access Weather Forecast
        </button>
        {/* {loading ? "Loading..." : "Access Weather Forecast"} */}
        </div>
        {/* {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather__data">
                    <h2>Weather Forecast</h2>
                    <p>Temperature: {weatherData.temperature} °C</p>
                    <p>Condition: {weatherData.condition}</p>
                    {/* Add more weather details as needed */}
        </>
    )
}

export default WeatherForecast;