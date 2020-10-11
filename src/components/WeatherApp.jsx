import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

const WeatherApp = () => {
  return (
    <>
      <h1>weather app</h1>
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faCloud} />
      <FontAwesomeIcon icon={faUmbrella} />
    </>
  );
};

export default WeatherApp;
