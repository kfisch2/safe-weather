import { React, useState } from "react";
import DayCard from "./DayCard";
import ForecastCard from "./ForecastCard";

const states = require("./states.json");
const apiKey = process.env.REACT_APP_API_KEY;

export default function Search() {
  const [queryCalled, setQueryCalled] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState([]);

  const renderDayCard = (weatherData, cityInfo) => {
    return <DayCard weatherData={weatherData} cityInfo={cityInfo} />;
  };

  const renderForecastCard = (forecast) => {
    return <ForecastCard forecast={forecast} />;
  };

  const handleSubmit = async () => {
    const cityName = document.querySelector("#cityName").value;
    const stateName = document.querySelector("#stateName").value;
    getCoords(cityName, stateName);
  };

  const getCoords = async (city, state) => {
    const data = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},us&appid=${apiKey}`
    );

    const cityInfo = await data.json();

    const lat = cityInfo[0].lat;
    const lon = cityInfo[0].lon;

    setCity(cityInfo);
    getWeather(lat, lon);
    getForecast(lat, lon);
  };

  // same day weather
  const getWeather = async (lat, lon) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const weatherData = await data.json();

    console.log(weatherData)
    setQueryCalled(true);
    setWeather(weatherData);
  };

  // 5 day forecast
  const getForecast = async (lat, lon) => {
    // const data = await fetch(
    //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // );

    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`);

    const forecast = await data.json();
    console.log(forecast);
    const day1 = forecast.daily[1]
    const day2 = forecast.daily[2]
    const day3 = forecast.daily[3]
    const day4 = forecast.daily[4];
    const day5 = forecast.daily[5];
    const forecastDays = [day1, day2, day3, day4, day5];
    setForecast(forecastDays);
  };

  return (
    <div className="homePage">
      <div className="dayCardContainer">
        {" "}
        <form
          className="weatherForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {" "}
          <input id="cityName" placeholder="City"></input>{" "}
          <label className="dropbtn">State</label>
          <select
            id="stateName"
            className="dropdown-content"
            defaultValue={null}
          >
            {states.map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button>Search</button>
        </form>
        <div className="dayCard">
          {queryCalled && renderDayCard(weather, city)}
        </div>
      </div>

      <div className="forecastContainer">
        <h3>5-day forecast</h3>
        <div className="forecastCards">{queryCalled && renderForecastCard(forecast)}</div>
      </div>
    </div>
  );
}
