import React from "react";
import snow from "../images/snow.png";
import rain from "../images/rain.jpg";
import clear from "../images/clear.jpg";
import clouds from "../images/clouds.jpg";
import lightning from "../images/lightning.jpg";
import KtoFConversion from "../utils/helpers";

export default function ForecastCard({ forecast }) {
  // console.log(forecast);
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
      case "lightning":
        return <img className="weatherIcon" src={lightning} />;
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
              <div>{day.weather[0].main}</div>
              <div>High Temp: {KtoFConversion(day.main.temp_max)}°F</div>
              <div>Low Temp: {KtoFConversion(day.main.temp_min)}°F</div>
              <div>Humidity: {day.main.humidity}%</div>
              <div>AQI: </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
