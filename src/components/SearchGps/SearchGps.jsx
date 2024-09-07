import "./SearchGps.scss";
import "../Search/Search.scss";
import mapIcon from "../../assets/icons/map.png"
function SearchGps (){
    return (
        <>
         <div className="search">
            <p className="search__prompt">Use live location</p>
            <div className="search__map-container">
              <img className="search__map-icon" src={mapIcon} alt="Map Icon" />
            </div>
            <form className="search__form">
              {/* You can add inputs or controls for live location here */}
              <button className="search__button">Submit</button>
            </form>
           </div>
        </>
    )
}

export default SearchGps;