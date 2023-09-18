import './style.css'

import getWeather from './modules/getWeather.js';


const apiKey = 'ce8d565b4f7746cb970133312231609';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=london`;


getWeather(apiUrl);
