import React, { useEffect } from "react";
import snow from "../images/snow.png";
import rain from "../images/rain.jpg";
import clear from "../images/clear.jpg";
import clouds from "../images/clouds.jpg";
import lightning from "../images/lightning.jpg";

export default function ForecastCard({ forecast }) {
  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "rain":
        return <img className="weatherIcon" src={rain} />;
      case "clouds":
        return <img className="weatherIcon" src={clouds} />;
      case "snow":
        return <img className="weatherIcon" src={snow} />;
      case "clear":
        return <img className="weatherIcon" src={clear} />;
      default:
        return <img className="weatherIcon" src="" />;
    }
  };
  return (
    <>
      {forecast.map((day, i) => (
        <>
          <div
            key={i}
            className={`forecastCard ${day.weather[0].main.toLowerCase()}`}
          >
            {renderWeatherIcon(day.weather[0].main.toLowerCase())}
            <div className="forecastInfo">
              <div>{day.weather[0].main.toLowerCase()}</div>
              <div>High Temp: </div>
              <div>Low Temp: </div>
              <div>Humidity: </div>
              <div>AQI: </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
