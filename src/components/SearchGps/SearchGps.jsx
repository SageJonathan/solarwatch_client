import { useState } from "react";
import "./SearchGps.scss";
import "../SearchLocal/SearchLocal.scss";
import mapIcon from "../../assets/icons/map.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

function SearchGps() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(`${baseUrl}/solarSearch`, {
              params: {
                lat: latitude,
                lng: longitude,
              },
            });
            navigate("/weather", { state: { weatherData: response.data } });
          } catch (error) {
            console.error("Error fetching solar data:", error);
            setError("Failed to fetch sunrise data. Please try again."); 
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setError(
            "Could not retrieve your location. Please enable location services."
          );
          setLoading(false); 
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by your browser."); 
    }
  };

  return (
    <>
      <div className="search">
        <p className="search__prompt">Use live location</p>
        <div className="search__map-container">
          <img className="search__map-icon" src={mapIcon} alt="Map Icon" />
        </div>
        <form
          className="search__form"
          onSubmit={(event) => {
            event.preventDefault(); 
            handleGetCurrentLocation();
          }}
        >
          <button type="submit" className="search__button" disabled={loading}>
            {loading ? "Fetching..." : "Submit"}
          </button>
        </form>
        {error && <p className="search__error">{error}</p>}{" "}
      </div>
    </>
  );
}

export default SearchGps;
