import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Los Angeles");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    if (city.trim() !== "") {
      search();
    } else {
      alert("Please enter a city.");
    }
  }

  function search() {
    const apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-8">
              <div className="input-wrapper">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control search-input"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <div className="col-6 weather-info">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind} km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6 temperature-info">
            <div>
              <WeatherIcon code={weatherData.icon} size={50} color="#FFCC00" />
            </div>
            <WeatherTemperature celsius={weatherData.temperature} />
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
