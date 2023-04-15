import React from "react";
import { KtoFConversion, renderWeatherIcon } from "../utils/helpers";

export default function ForecastCard({ forecast }) {
  console.log(forecast);

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
              <div>{day.weather[0].description}</div>
              <div>high: {KtoFConversion(day.temp.max)}°F </div>
              <div>low: {KtoFConversion(day.temp.min)}°F</div>
              {/* <div>humidity: {day.main.humidity}%</div> */}
              {/* <div>AQI: </div> */}
            </div>
          </div>
        </>
      ))}
    </>
  );
}
