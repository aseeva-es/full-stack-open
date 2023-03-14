
export default function getWeather(country){
    // const api_key = process.env.REACT_APP_API_KEY;
    const api_key = "1eadd7a13234579ddd60b821bad3a9ec";
    const lat = country.latlng[0];
    const lon = country.latlng[1];
    return fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
    .then(data =>data.json())
}