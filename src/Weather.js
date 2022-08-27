import React from "react";

import "./Weather.css";

export default function Weather(){
  return(
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
      <h1>Apple Valley</h1>
      <ul>
        <li>Friday 7:00 PM</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
            alt="Mostly sunny" 
            
            />
            
            
              <span className="temperature">23</span>
              <span className="unit">°C |</span><span className="unit">°F</span>

            
            
          
       </div>
        
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 54%</li>
            <li>Wind: 10 km/h</li>

          </ul>
        </div>

      </div>
    </div>
  );
}