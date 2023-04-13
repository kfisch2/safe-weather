import React, { useEffect } from "react";

export default function ForecastCard({ forecast }) {
  console.log(forecast);

  return (
    <>
      {forecast.map((day, i) => (
        <div
          key={i}
          className={`forecastCard ${day.weather[0].main.toLowerCase()}`}
        >
          {day.weather[0].main} <div>High Temp: </div>
          <div>Low Temp: </div>
          <div>Humidity: </div>
          <div>AQI: </div>
        </div>
      ))}
    </>
  );
}
