import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
import mapIcon from "../../assets/icons/map.png"

const baseUrl = import.meta.env.VITE_BASE_URL;

function Search() {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const navigate = useNavigate();

    function handleLongitude(event) {
        event.preventDefault();
        setLongitude(event.target.value);
    }

    function handleLatitude(event) {
        event.preventDefault();
        setLatitude(event.target.value);
    }

    async function handleFormSubmitLL(event) {
        event.preventDefault();
        try {
            const response = await axios.get(
                'http://localhost:8080/search?lat=38.907192&lng=-77.036873',
                {
                    params: {
                        lat: latitude,
                        lng: longitude
                    }
                }
            );
            // Handle response data as needed
            console.log('Response from backend:', response.data);
            // Navigate to the appropriate page with the response data
            navigate(`/weather`, { state: { weatherData: response.data } });
        } catch (error) {
            console.error('Error fetching data from backend:', error);
        }
    }

    return (
        <>
          <h2 className="search__title">Try it out yourself!</h2>
          <div className="test3">
           <div className="test">
          <form className="search searchLo">
          <p>Enter a location's name</p>
          <div className="search__container">
                <label className="search__label"> Location:</label>
                <input
                        className="search__input"
                        // onChange={}
                        // value={}
                        required
                    />
             </div>
             <button className="search__button">Submit</button>
             </form>
             </div>
             <div className="test2">
             <form className="search searchGPS"></form>
             <div> <p>Use your live location! </p></div>
             <div>  <img className="img" src={mapIcon} alt="Map Icon" /></div>
             </div>
             </div>
        
            
        <form className="search searchLL" onSubmit={handleFormSubmitLL}>
        <p>Know the cooridnates? </p>
            <div className="search__container">
                <div className="longitude">
                    <label className="search__label">Longitude:</label>
                    <input
                        className="search__input"
                        onChange={handleLongitude}
                        value={longitude}
                        required
                    />
                </div>
                <div className="latitude">
                    <label className="search__label">Latitude:</label>
                    <input
                        className="search__input"
                        onChange={handleLatitude}
                        value={latitude}
                        required
                    />
                </div>
            </div>
            <button className="search__button">Submit</button>
        </form>
        </>
    );
}

export default Search;
