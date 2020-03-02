import React from "react";

import Home from "../presentation/Home";

export default class PostItemsContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
      forecastData: {}
    };
  }

  componentDidMount() {
    this.handleRetrieveWeather();
    this.handleRetrieveForecast();
  }

  handleRetrieveWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Perth,Australia&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ weatherData: data });
      });
  }

  async handleRetrieveForecast() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast/?q=Perth,Australia&cnt=5&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e"
    );

    const data = await response.json();

    this.setState({ forecastData: data });
  }

  timestampToTime = timestamp => {
    const date = new Date(timestamp * 1000);
    let minutes = date.getMinutes();

    if (minutes.toString().length <= 1) {
      minutes = `0${date.getMinutes()}`;
    }
    return `${date.getHours()}:${minutes}`;
  };
  
  roundUpTemperature = temparture => {
    return Math.round(temparture);
  };

  render() {
    const {
      state: { weatherData, forecastData },
      timestampToTime,
      roundUpTemperature
    } = this;

    return (
      <Home
        weatherData={weatherData}
        timestampToTime={timestampToTime}
        forecastData={forecastData}
        roundUpTemperature={roundUpTemperature}
      />
    );
  }
}
