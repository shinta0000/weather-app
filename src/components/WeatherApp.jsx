import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faUmbrella, faBolt, faCloudRain, faSnowflake, faSmog, faSun } from "@fortawesome/free-solid-svg-icons";

const WeatherApp = (props) => {
  const nowWeather = props.weatherIcon;
  let item;
  // "faSun"という文字列ではなくfaSunとアイコンを代入することによって正しく表示された
  if (nowWeather === "faSun") {
    item = faSun;
  } else if (nowWeather === "faUmbrella") {
    item = faUmbrella;
  } else if (nowWeather === "faCloud") {
    item = faCloud;
  } else if (nowWeather === "faBolt") {
    item = faBolt;
  } else if (nowWeather === "faCloudRain") {
    item = faCloudRain;
  } else if (nowWeather === "faSnowflake") {
    item = faSnowflake;
  } else if (nowWeather === "faSmog") {
    item = faSmog;
  }

  const box = <FontAwesomeIcon icon={item} className="display-3" />;
  return (
    <div className="container">
      <div className="cards">
        <h1>{props.city}, {props.country}</h1>
        <h5 className="py-4">
          {box}
        </h5>
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h4 className="py-4">{props.description}</h4>
      </div>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span className="py-4">{min}&deg;</span>
      <span className="py-4">{max}&deg;</span>
    </h3>
  );
};

export default WeatherApp;
