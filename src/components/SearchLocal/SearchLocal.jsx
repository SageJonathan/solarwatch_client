import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchLocal.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function SearchLocal() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLocation(event) {
    event.preventDefault();
    setLocation(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (!location) {
      alert("Please enter a location");
      return;
    }

    setLoading(true);

    try {
      const coordinatesResponse = await axios.get(
        `${baseUrl}/coordinateSearch`,
        {
          params: { location },
        }
      );
      const { lat, lng } = coordinatesResponse.data;

      const sunResponse = await axios.get(`${baseUrl}/solarSearch`, {
        params: { lat, lng },
      });
      const { sunrise, sunset, day_length } = sunResponse.data;

      navigate(`/weather`, { state: { solarData: sunResponse.data } });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="search">
        <form className="search__form" onSubmit={handleFormSubmit}>
          <p className="search__prompt">Look up by location</p>
          <div className="search__input-group">
            <label className="search__label"></label>
            <input
              id="location"
              className="search__input"
              onChange={handleLocation}
              value={location}
              placeholder="Mount Robson"
              required
            />
          </div>
          <button className="search__button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchLocal;
