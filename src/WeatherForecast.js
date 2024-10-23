import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import { Axios } from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "bf54175800a55e59e6c4d6461deeef12";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}lon=${longitude}&appid=${apiKey}`;

  Axios.length(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="10n" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
