import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../SearchLocal/SearchLocal.scss";
import "./SearchAdv.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function SearchAdv() {
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

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (!latitude || !longitude) {
      alert("Please enter both latitude and longitude.");
      return;
    }

    try {
      const coordinates = { lat: latitude, lng: longitude };
      const response = await axios.get(`${baseUrl}/solarSearch`, {
        params: coordinates,
      });

      navigate(`/weather`, { state: { solarData: response.data, coordinates:coordinates} });
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  }

  return (
    <>
      <div className="search">
        <form className="search__form" onSubmit={handleFormSubmit}>
          <p className="search__prompt">Look up coordinates</p>
          <div className="search__container search__container--adv">
            <div className="latitude">
              <label className="search__label">Latitude:</label>
              <input
                className="search__input"
                onChange={handleLatitude}
                value={latitude}
                placeholder="ex.53.2811"
                required
              />
            </div>
            <div className="longitude">
              <label className="search__label">Longitude:</label>
              <input
                className="search__input"
                onChange={handleLongitude}
                value={longitude}
                placeholder="ex.119.1616"
                required
              />
            </div>
          </div>
          <button className="search__button search__button--adv">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SearchAdv;
