import React from 'react';
import { useTooltip } from '../../utils/tooltip';  
import './CurrentSolar.scss';
import infoIcon from "../../assets/icons/info.png"; 

function CurrentSolar({ solarData, locationName, advCoordinates }) {
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
    { label: 'Sunrise', value: solarData.sunrise, tooltip: 'Sunrise time.' },
    { label: 'Sunset', value: solarData.sunset, tooltip: 'Sunset time.' },
    { label: 'First Light', value: solarData.first_light, tooltip: 'First light of the day.' },
    { label: 'Last Light', value: solarData.last_light, tooltip: 'Last light of the day.' },
    { label: 'Dawn', value: solarData.dawn, tooltip: 'Pre-sunrise light.' },
    { label: 'Dusk', value: solarData.dusk, tooltip: 'Post-sunset light.' },
    { label: 'Solar Noon', value: solarData.solar_noon, tooltip: 'Sun at its highest point.' },
    { label: 'Golden Hour', value: solarData.golden_hour, tooltip: 'Best light for photography.' },    
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
            {row.map((event) => {
              const { visible, showTooltip, hideTooltip } = useTooltip();

              return (
                <div className="data__container" key={event.label}>
                  <div className="data__header">
                    {event.label}
                    <div
                      className="info-icon"
                      onMouseEnter={showTooltip}
                      onMouseLeave={hideTooltip}
                      onClick={() => visible ? hideTooltip() : showTooltip()}
                    >
                      <img src={infoIcon} alt="Info Icon" />
                      {visible && <div className="tooltip__content">{event.tooltip}</div>}
                    </div>
                  </div>
                  <p className="data__info">{event.value}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="data__container data__container--day-length">
        <h3 className="data__header--annex">Total Daylight</h3>
        <p className="data__info">{solarData.day_length}</p>
      </div>
    </div>
  );
}

export default CurrentSolar;
