import "./SearchGps.scss";
import mapIcon from "../../assets/icons/map.png"
function SearchGps (){
    return (
        <>
         <div className="search__live-location">
            <p className="search__instruction">Use your live location!</p>
            <div className="search__map-icon">
              <img className="search__map-image" src={mapIcon} alt="Map Icon" />
            </div>
            <form className="search__form search__form--gps">
              {/* You can add inputs or controls for live location here */}
            </form>
          </div>
        </>
    )
}

export default SearchGps;