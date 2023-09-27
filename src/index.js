// CSS
import './style.css'

// JS Modules
import * as fetchAPI from './modules/fetchAPI.js';
import * as DOM from './modules/manipulateDOM.js';
import * as utils from './modules/utils.js';


// Using await in global context is legal for ES6 modules
const currentLocation = await fetchAPI.getUserLocation();
const apiKey = 'ce8d565b4f7746cb970133312231609';

const apiUrl = utils.getAPIurl(apiKey, currentLocation);


// Get weather data and fill in elements
utils.fetchAndFillWeatherInfo(apiUrl, fetchAPI.getWeather, DOM.fillElements);


// Reload info box when user inputs a new city
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Show loading div 
        DOM.loadingElement.style.display = "block";
        DOM.main.classList.remove("fade-in");
        DOM.main.style.display = "none";

        const userAPIurl = utils.getAPIurl(apiKey, DOM.userInput);
        utils.fetchAndFillWeatherInfo(
            userAPIurl, 
            fetchAPI.getWeather, 
            DOM.fillElements
            );
    }
});


// Button to change fahrenheit to celsius and vice cersa
DOM.addConvertButtonEventListener(utils.convertCelsiustoFahrenheit, utils.convertFahrenheitToCelsius);