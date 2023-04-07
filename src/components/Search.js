import { React, useState } from "react";
import DayCard from "./DayCard";

const states = require("./states.json");
const apiKey = "1eb784753dd9691347d2b905eeeffc69";

export default function Search() {
  const [queryCalled, setQueryCalled] = useState(false);
  const [weather, setWeather] = useState({})

  const renderDayCard = (weatherData) => {
    return <DayCard weatherData={weatherData}/>;
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
    console.log(cityInfo);

    const lat = cityInfo[0].lat;
    const lon = cityInfo[0].lon;

    getWeather(lat, lon);
  };

  const getWeather = async (lat, lon) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const weatherData = await data.json();
    setQueryCalled(true);
    setWeather(weatherData.weather[0]);    
  };

  return (
    <>
      <div>Get AQI and weather forecast for your city !</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {" "}
        <input id="cityName" placeholder="city name"></input>
        <label className="dropbtn">Select state</label>
        <select id="stateName" className="dropdown-content" defaultValue={null}>
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
        <button>Search</button>
      </form>
      {queryCalled && renderDayCard(weather)}
    </>
  );
}
