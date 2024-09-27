import "./SolarForecast.scss";

function SolarFunction ({solarData,locationName,coordinates}){
    
    const getLocationText = () => {
        if (locationName) {
            return locationName;
        } else if (coordinates && coordinates.lat && coordinates.lng) {
            return `${coordinates.lat}° / ${coordinates.lng}°`; 
        } else {
            return "Live Location";
        }
    };

    return (
        <section className="main">
            <h1 className="main__header">
                Solar Activity at {getLocationText()}
            </h1>
            <div className="data">
        <div className="data__row">
            <div className="data__container">
                <h3 className="data__header">
                    Sunrise
                </h3>
                <p className="data__info">
                    {solarData.sunrise}
                </p>
            </div>
            <div className="data__container">
                <h3 className="data__header">
                    Sunset
                </h3>
                <p className="data__info">
                    {solarData.sunset}
                </p>
            </div>
        </div>
        <div className="data__row">
        <div className="data__container">
                <h3 className="data__header">
                    First Light
                </h3>
                <p className="data__info">
                    {solarData.first_light}
                </p>
            </div>
            <div className="data__container">
                <h3 className="data__header">
                    Last Light
                </h3>
                <p className="data__info">
                    {solarData.last_light}
                </p>
            </div>
        </div>
        <div className="data__row">
        <div className="data__container">
                <h3 className="data__header">
                    Dawn
                </h3>
                <p className="data__info">
                    {solarData.dawn}
                </p>
            </div>
            <div className="data__container">
                <h3 className="data__header">
                    Dusk
                </h3>
                <p className="data__info">
                    {solarData.dusk}
                </p>
            </div>
        </div>
        <div className="data__row">
        <div className="data__container">
                <h3 className="data__header">
                    Solar Noon
                </h3>
                <p className="data__info">
                    {solarData.solar_noon}
                </p>
            </div>
            <div className="data__container">
                <h3 className="data__header">
                    Golden Hour
                </h3>
                <p className="data__info">
                    {solarData.golden_hour}
                </p>
            </div>
        </div>
        </div>
         <div className="data__container data__container--day-length">
                <h3 className="data__header">
                    Total Daylight
                </h3>
                <p className="data__info">
                    {solarData.day_length}
                </p>
            </div>
        </section>
    )
}

export default SolarFunction