import snow from "../images/snow.png";
import rain from "../images/rain.jpg";
import clear from "../images/clear.jpg";
import clouds from "../images/clouds.jpg";
import lightning from "../images/lightning.jpg";

export const renderWeatherIcon = (icon) => {
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

export const KtoFConversion = (K) => {
  let F;
  F = (K - 273.15) * (9 / 5) + 32;
  return Math.trunc(F);
};