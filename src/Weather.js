import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

    })
    
  }

 
  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  function search(){
  const apiKey = "1d2d7ae3cef5d0f29cee6f2f8551ecdf";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  }
  

  if (weatherData.ready) {
    return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            
            <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
          
        </div>
      </form>
      <WeatherInfo date={ weatherData } />
     
    </div>
  );
  } else {
  search();
  return "Loading...";
  }
 
}