import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Los Angeles</h1>
      <div className="row">
        <div className=" col-6 weather-info">
          <ul>
            <li>Monday 15:14, clear sky</li>
            <li>
              Humidity: <strong>29%</strong>, Wind: <strong>4.63km/h</strong>
            </li>
          </ul>
        </div>
        <div className=" col-6 temperature-info">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <span className="temperature">33</span>
          <span className="unit">℃</span>
        </div>
      </div>
    </div>
  );
}
