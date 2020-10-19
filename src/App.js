import React from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form.component";

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

  get_WeatherIcon(icons, rangeId) {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm})
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon: this.weatherIcon.Drizzle})
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon: this.weatherIcon.Rain})
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon: this.weatherIcon.Snow})
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon: this.weatherIcon.Atmosphere})
        break;
      case rangeId === 800:
        this.setState({icon: this.weatherIcon.Clear})
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon: this.weatherIcon.Clouds})
        break;
      default:
        this.setState({icon: this.weatherIcon.Clouds})
    }
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
      // icon: this.weatherIcon.Snow,
    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  };

  render() {
    return (
      <div className="App">
        <Form />
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
