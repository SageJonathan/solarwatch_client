import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Cards.scss";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Cards() {
    const navigate = useNavigate();

    async function fetchMountainById(mountainId) {
        try {
            const response = await axios.get(`${baseUrl}/mountain/${mountainId}`); // Adjust the URL as needed
            navigate(`/weather/${mountainId}`, { state: { weatherData: response.data } });
        } catch (error) {
            console.error('Error fetching mountain information by ID:', error);
        }
    }

    return (
        <div className="cards">
            <p className="cards__title">Common areas!</p>
            <div className="cards__mega-container">
                <div
                    className="cards__container"
                    id="001"
                    onClick={() => fetchMountainById("001")}
                >
                    <p className="cards__sub-title">Ha ling</p>
                </div>
                <div
                    className="cards__container"
                    id="002"
                    onClick={() => fetchMountainById("002")}
                >
                    <p className="cards__sub-title">Grouse Mountain</p>
                </div>
                <div
                    className="cards__container"
                    id="003"
                    onClick={() => fetchMountainById("003")}
                >
                    <p className="cards__sub-title">Pinnacle</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
