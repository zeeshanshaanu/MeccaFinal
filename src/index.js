import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { AppStorage } from "./services/AppStorage.js";

/////////////////////////
// axios.defaults.baseURL = "http://localhost:3004";
// axios.defaults.baseURL = "http://164.92.224.155:83/api";
// axios.defaults.baseURL = "http://meccafitness.org/api";
axios.defaults.baseURL = "https://www.meccafitness.org/api/";
// axios.defaults.baseURL = "https://phatapiprod.azurewebsites.net";
/////////////////////////
window.appStorage = new AppStorage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
