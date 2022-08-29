import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props){
  
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

    })
    
    
  }
  

  if (weatherData.ready) {
    return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            
            <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
          
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li><FormattedDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          
            <img 
            src={weatherData.iconUrl}
            alt={weatherData.description} 
            
            />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C |</span><span className="unit">°F</span>
        </div>
        
        <div className="col-6">
          <ul>
            
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>

          </ul>
        </div>

      </div>
    </div>
  );
  } else {
  const apiKey = "1d2d7ae3cef5d0f29cee6f2f8551ecdf";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
  }
 
}