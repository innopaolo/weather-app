import { main, loadingElement, fahrenheitFlag } from './manipulateDOM.js';

// URL for getting JSON data
export function getAPIurl(apiKey, location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    return apiUrl;
}

// Displays error message
const errorMessage = document.querySelector('.error-message');
function errorDisplay() {
    errorMessage.textContent = "Found no match!";

    setTimeout(() => {
        errorMessage.textContent = "";
    }, 3000);
}

// Get weather data and fill in elements
export async function fetchAndFillWeatherInfo(url, getWeather, fillElements) {
    try {
        const data = await getWeather(url);
        let country = data.location.country;

        // Shorten country names
        if (country.includes("United States")) {
            country = "USA"; 
        } else if (country.includes("United Kingdom")) {
            country = "UK";
        }

        // Ensures info box presents correct temperature scale
        let currentTemp;
        let currentFeelsLike;
        if (fahrenheitFlag) {
            currentTemp = data.current.temp_f;
            currentFeelsLike = data.current.feelslike_f;
        } else {
            currentTemp = data.current.temp_c;
            currentFeelsLike = data.current.feelslike_c;
        }

        const locationText = `${data.location.name}, ${country}`;
        fillElements(
            data.current.condition.text,
            locationText,
            currentTemp,
            currentFeelsLike,
            data.current.wind_mph,
            data.current.humidity
        );

        setTimeout(() => {
            loadingElement.style.display = "none";
            main.classList.add("fade-in");
            main.style.display = "block";
        }, 1000);
    } catch (error) {
        errorDisplay();
        main.style.display = "none";
        loadingElement.style.display = "none";
    }
}


// Convert celsius to fahrenheit
export function convertCelsiustoFahrenheit(celsius) {
    const fahrenheit = ((celsius * 9/5) + 32);
    return roundOff(fahrenheit);
}

// Convert fahrenheit to celsius
export function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (((fahrenheit - 32) * 5/9));
    return roundOff(celsius);
}

// Any decimal portion less than 0.5 will not 
// affect the integer part when using Math.floor, 
// and any decimal portion equal to or greater 
// than 0.5 will push the integer part up by 1
export function roundOff(number) {
    return Math.floor(number + 0.5);
}