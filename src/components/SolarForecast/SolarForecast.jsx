import "./SolarForecast.scss";

function SolarFunction ({solarData}){
    return (
        <section className="main">
        <div className="main__heading-container">
            <h1 className="main__header">
                Sunrise and Sunset 
            </h1>
        </div>
        <div className="main__information">
            <div className="main__sunrise" id="main__modifier">
                <h3 className="main__sunrise-head">
                    SUNRISE
                </h3>
                <p className="main__sunrise-time" id="main__modifier3">
                    {solarData.sunrise}
                </p>
            </div>
            <div className="main__sunset" id="main__modifier">
                <h3 className="main__sunset-head" id="main__modifier2">
                    SUNSET
                </h3>
                <p className="main__sunset-time" id="main__modifier3">
                    {solarData.sunset}
                </p>
            </div>

            <div className="main__sunlight-hours" id="main__modifier">
                <h3 className="main__sunlight-hours-head" id="main__modifier2">
                    HOURS
                </h3>
                <p className="main__sunlight-hours-time" id="main__modifier3">
                    {solarData.day_length}
                </p>
            </div>
        </div>
        </section>
    )
}

export default SolarFunction