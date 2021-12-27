import "./Weather.css";
import React, { useEffect, useState } from "react";

/* open weather API config */
const apiKey = "e61aa27d22eb0b30ab346a9f6441d600";
const url = `https://api.openweathermap.org/data/2.5/weather?q=porto alegre&appid=${apiKey}&units=metric`;

function update() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.weather[0].icon);

      // Weather Icon
      //weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // Weather description
      this.desc = data.weather[0].description;
      console.log(this.desc);
      // Temperature - math.round so the number isn't fractional
      this.temp = Math.round(data.main.temp);
    });
}

function Weather(props) {
  const [desc, setDesc] = useState([]);
  const [temp, setTemp] = useState([]);
  const [icon, setIcon] = useState([]);
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.weather[0].icon);

        // Weather Icon
        //weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );

        // Weather description
        setDesc(data.weather[0].description);

        // Temperature - math.round so the number isn't fractional
        setTemp(Math.round(data.main.temp));
        setLoc(data.name);
      });
  });

  return (
    <div className="weather-container">
      <img id="icone" src={icon} alt="" />
      <h1>{loc}</h1>
      <div className="details">
        <p id="temp">{temp}ºC</p>
        <p id="desc">{desc}</p>
      </div>
    </div>
  );
}

export default Weather;
