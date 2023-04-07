import { React, useState } from "react";
const states = require("./states.json");
const apiKey = "";


export default function Search() {
  console.log(apiKey);
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");

  const cityName = document.getElementById("cityName");
  const stateName = document.getElementById("stateName");

  const handleSubmit = async () => {
    await getCoords(cityName.value, stateName.value);
  };

  const getCoords = async (city, state) => {
    const data = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&appid=${apiKey}`
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

    const res = await data.json();
    console.log(res.weather[0]);
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
    </>
  );
}
