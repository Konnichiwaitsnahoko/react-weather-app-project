import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              valuer="Search"
              className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <h1>Los Angeles</h1>
      <ul>
        <li>Monday 15:14, clear sky</li>
        <li>Humidity: 29%, Wind: 4.63km/h</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          33℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 24%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
