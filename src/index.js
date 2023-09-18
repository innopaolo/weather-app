// CSS
import './style.css'

// JS Modules
import * as JSONinfo from './modules/fetchAPI.js';
import * as DOM from './modules/manipulateDOM.js';

// Using await in global context is legal for ES6 modules
const currentLocation = await JSONinfo.getUserLocation();
const apiKey = 'ce8d565b4f7746cb970133312231609';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentLocation}`;

// Get weather data and fill in elements
const data = await JSONinfo.getWeather(apiUrl);
const locationText = `${data.location.name}, ${data.location.country}`;
DOM.fillElements(
    data.current.condition.text,
    locationText,
    data.current.temp_c,
    data.current.feelslike_c,
    data.current.wind_mph,
    data.current.humidity
);


