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
      country: undefined
    };
    this.getWeather();
  }

  // fetchするデータにhttp://の記述をしたらうまく行った
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }

  render() {
    return (
      <div className="App">
        <WeatherApp city={this.state.city} country={this.state.country} />
      </div>
    );
  }
}

export default App;
