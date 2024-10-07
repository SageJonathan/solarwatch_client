import "./SolarForecast.scss";

function SolarFunction({ solarData, locationName, advCoordinates }) {
  const getLocationText = () => {
    if (locationName) {
      return locationName;
    } else if (
      advCoordinates &&
      advCoordinates.latitude &&
      advCoordinates.longitude
    ) {
      return `${advCoordinates.latitude}° / ${advCoordinates.longitude}°`;
    } else {
      return "Live Location";
    }
  };

  const solarEvents = [
    { label: "Sunrise", value: solarData.sunrise },
    { label: "Sunset", value: solarData.sunset },
    { label: "First Light", value: solarData.first_light },
    { label: "Last Light", value: solarData.last_light },
    { label: "Dawn", value: solarData.dawn },
    { label: "Dusk", value: solarData.dusk },
    { label: "Solar Noon", value: solarData.solar_noon },
    { label: "Golden Hour", value: solarData.golden_hour },
  ];

  const rows = [];
  for (let i = 0; i < solarEvents.length; i += 2) {
    rows.push(solarEvents.slice(i, i + 2));
  }

  return (
    <div className="meta">
      <div className="main">
        <h1 className="main__header">Solar Activity at {getLocationText()}</h1>
      </div>
      <div className="data">
        {rows.map((row, index) => (
          <div className="data__row" key={index}>
            {row.map((event) => (
              <div className="data__container" key={event.label}>
                <h3 className="data__header">{event.label}</h3>
                <p className="data__info">{event.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="data__container data__container--day-length">
        <h3 className="data__header">Total Daylight</h3>
        <p className="data__info">{solarData.day_length}</p>
      </div>
    </div>
  );
}

export default SolarFunction;
