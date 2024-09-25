import "./SolarForecast.scss";

function SolarFunction ({solarData}){

    return (
        <section className="main">
            <h1 className="main__header">
                Solar Activity at LOCATION
            </h1>
        <div className="main__data main__data--row1">
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

            <div className="data__container">
                <h3 className="data__header">
                    Total Daylight
                </h3>
                <p className="data__info">
                    {solarData.day_length}
                </p>
            </div>
        </div>
        <div className="main__data main__data--row2">
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
        <div className="main__data main__data--row3">
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
        <div className="main__data main__data--row4">
        <div className="data__container">
                <h3 className="data__header">
                    Solar Noon
                </h3>
                <p className="data__info">
                    {solarData.solar__noon}
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
        </section>
    )
}

export default SolarFunction