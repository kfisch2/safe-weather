import React from "react";
import "../index.css";

export default function DayCard({ weatherData }) {
  return (
    <>
      <h1>{weatherData.description}</h1>
      <img
        className="weatherIcon"
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
      ></img>
      <div>{weatherData.main}</div>
    </>
  );
}
