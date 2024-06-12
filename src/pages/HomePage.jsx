

import "./HomePage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL;

function HomePage() {
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

    const lat = 'your_latitude_value'; const lng = 'your_longitude_value';

    async function handleFormSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.get(
                // `${baseUrl}/search?lat=${latitude}&lng=${longitude}`
                'http://localhost:8080/search?lat=38.907192&lng=-77.036873'
                , {
                params: {
                    lat: latitude,
                    lng: longitude
                }
            });
            // Handle response data as needed
            console.log('Response from backend:', response.data);
            // Navigate to the appropriate page with the response data
            navigate(`/weather`, { state: { weatherData: response.data } });
        } catch (error) {
            console.error('Error fetching data from backend:', error);
        }
    }

    async function fetchMountainById(mountainId) {
        try {
            const response = await axios.get(`${baseUrl}/mountain/${mountainId}`); // Adjust the URL as needed
            //const data = await response.json();
            //console.log('Mountain Information:', response.data);
            navigate(`/weather/${mountainId}`, { state: { weatherData: response.data } });
        } catch (error) {
            console.error('Error fetching mountain information by ID:', error);
        }
    }

    return (
        <section className="main">
            <div className="hero">
                <p className="hero__slogan">Your Ultimate Hiking Companion</p>
                <p className="hero__info">Plan perfect hikes with precise sunrise and sunset times, and stay prepared with up-to-the-minute weather updates. </p>
            </div>

            <div className="about">
                <p className="about__title">Who are we?</p>
                <p className="about__writing">Step into the wild with confidence using <strong>Solar Watch</strong>, the premier app designed for adventurers like you. <br></br><br></br>Get precise sunrise and sunset times to plan your hikes perfectly, ensuring you never miss a breathtaking dawn or get caught out after dark. But that’s not all! Solar Watch also provides up-to-the-minute weather information, so you’re always prepared for whatever Mother Nature throws your way. Whether you’re scaling mountains or exploring serene trails, Solar Watch is your essential guide to making every hike safe, enjoyable, and unforgettable. Download now and let the journey begin!</p>
            </div>

            <form className="search" onSubmit={handleFormSubmit}>
                <p className="search__title">Try it out yourself!</p>
                <div className="search__container">
                    <div className="longitude">
                        <label className="search__label">Longitude:</label>
                        <input className="search__input" onChange={handleLongitude} value={longitude} required />
                    </div>
                    <div className="latitude">
                        <label className="search__label">Latitude:</label>
                        <input className="search__input" onChange={handleLatitude} value={latitude} required />
                    </div>
                </div>
                <button className="search__button">Submit</button>
            </form>

            <div className="cards">
                <p className="cards__title">Common areas!</p>
                <div className="cards__mega-container">
                    <div className="cards__container" id="001" onClick={() => fetchMountainById("001")}>
                        <p className="cards__sub-title">Ha ling</p>
                    </div>
                    <div className="cards__container" id="002" onClick={() => fetchMountainById("002")}>
                        <p className="cards__sub-title">Grouse Mountain</p>
                    </div>
                    <div className="cards__container" id="003" onClick={() => fetchMountainById("003")}>
                        <p className="cards__sub-title">Pincle</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
