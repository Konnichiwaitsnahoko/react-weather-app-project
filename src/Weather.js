import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"></input>
          </div>
          <div className="col-4">
            <input
              type="submit"
              valuer="Search"
              className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-8">
          <h1>Los Angeles</h1>
          <ul>
            <li>Monday 15:14, clear sky</li>
            <li>Humidity: 29%, Wind: 4.63km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          33℃
        </div>
      </div>
    </div>
  );
}
