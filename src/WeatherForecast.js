import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    if (props.coordinates) {
      const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
      const longitude = props.coordinates.lon;
      const latitude = props.coordinates.lat;
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.coordinates]);

  function handleResponse(response) {
    if (response.data && response.data.daily) {
      setForecast(response.data.daily);
      setLoaded(true);
    } else {
      console.error("No daily forecast data available");
    }
  }

  if (loaded && forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null; 
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
