import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/Konnichiwaitsnahoko"
            rel="noreferrer"
            target="_blank">
            Nahoko Park
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Konnichiwaitsnahoko/react-weather-app-project"
            rel="noreferrer"
            target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
