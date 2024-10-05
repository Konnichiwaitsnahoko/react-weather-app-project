import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "Monday 15:14",
    });

    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <div className="input-wrapper">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control search-input"
                  autoFocus="on"
                />
              </div>
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-button"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className=" col-6 weather-info">
            <ul>
              <li>Monday 15:14, {weatherData.description}</li>
              <li>
                Humidity: {""}
                <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind}km/h</strong>
              </li>
            </ul>
          </div>
          <div className=" col-6 temperature-info">
            <img src={weatherData.iconUrl} alt="Sunny" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
