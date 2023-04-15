import { React, useEffect, useState } from "react";
import "../index.css";
import { KtoFConversion, renderWeatherIcon } from "../utils/helpers";

export default function DayCard({ weatherData, cityInfo }) {
  let city = cityInfo[0].name;
  let state = cityInfo[0].state;

  return (
    <>
      <h3>
        {city}, {state}
      </h3>
      <div
        className={`weatherCard ${weatherData.weather[0].main.toLowerCase()}`}
      >
        {renderWeatherIcon(weatherData.weather[0].main.toLowerCase())}{" "}
        <div>Current: {KtoFConversion(weatherData.main.temp)}°</div>
        <div>High: {KtoFConversion(weatherData.main.temp_max)}°</div>
        <div>Low: {KtoFConversion(weatherData.main.temp_min)}°</div>
        <div>Humidity: {weatherData.main.humidity}%</div>
      </div>
    </>
  );
}
