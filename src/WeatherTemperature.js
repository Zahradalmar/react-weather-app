import React from "react";

export default function WeatherTemperature(props){
  return (
    <div className="weatherTemperature">
      <span className="temperature">{Math.round(props.date.temperature)}</span>
      <span className="unit">°C</span>
    </div>
  );
}