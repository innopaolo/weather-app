// CSS
import './style.css'

// JS Modules
import * as JSONinfo from './modules/fetchAPI.js';

// Using await in global context is legal for ES6 modules
const currentLocation = await JSONinfo.getUserLocation();

const apiKey = 'ce8d565b4f7746cb970133312231609';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentLocation}`;

JSONinfo.getWeather(apiUrl);


