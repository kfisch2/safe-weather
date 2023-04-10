import { React, useEffect, useState } from "react";
import "../index.css";

export default function DayCard({ weatherData, cityInfo }) {
  const [mainWeather, setMainWeather] = useState("");

  let city = cityInfo[0].name;
  let state = cityInfo[0].state;
  let main = weatherData.main.toLowerCase();

  // hook prevents infinite loop in setting mainWeather state
  useEffect(() => {
    setMainWeather(main);
  }, [main]);

  return (
    <div className={`dayCard ${mainWeather}`}>
      <h1>
        {city}, {state}
      </h1>
      <div>{weatherData.main}</div>
    </div>
  );
}
