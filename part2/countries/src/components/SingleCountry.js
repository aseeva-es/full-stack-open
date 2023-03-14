import { useEffect, useState } from "react";
import getWeather from "../functions/getWeather";

export default function SingleCountry({ country }) {
  console.log("single", country);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather(country).then((data) => {
      setWeather(data);
    });
  }, [country]);
  return (
    <>
      <h2>{country.name.common}</h2>
      <div>Capital: {country.capital[0]}</div>
      <div>Area: {country.area}</div>
      <h3>Languages</h3>
      {Object.keys(country.languages || {}).map((language) => (
        <li key={language}>{country.languages[language]}</li>
      ))}
      <div className="flag">{country.flag}</div>
      <h3>Weather in {country.name.common}</h3>
      <div>Temperature {weather?.main?.temp} Celsius</div>
      <div>
        {weather.weather && (
          <img
            src={` https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
            alt="weather icon"
          ></img>
        )}
      </div>
      <div>Wind {weather.wind && weather.wind.speed} m/s</div>
    </>
  );
}
