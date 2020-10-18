import React from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_KEY = "6e967f70361c5d470b132b20e7903fbd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "faBolt",
      Drizzle: "faCloudRain",
      Rain: "faUmbrella",
      Snow: "faSnowflake",
      Atmosphere: "faSmog",
      Clear: "faSun",
      Clouds: "faCloud",
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  // fetchするデータにhttp://の記述をしたらうまく行った
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      icon: this.weatherIcon.Snow,
    });
  };

  render() {
    return (
      <div className="App">
        <WeatherApp
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
