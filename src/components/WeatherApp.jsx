import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

const WeatherApp = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <h1>{props.city}, {props.country}</h1>
        <h5 className="py-4">
          <FontAwesomeIcon icon={faSun} className="display-3" />
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
