// URL for getting JSON data
export function getAPIurl(apiKey, location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    return apiUrl;
}

// Displays error message
const errorMessage = document.querySelector('.error-message');
export function errorDisplay() {
    errorMessage.textContent = "Found no match!";

    setTimeout(() => {
        errorMessage.textContent = "";
    }, 3000);
}

// Get weather data and fill in elements
export async function fetchAndFillWeatherInfo(url, getWeather, fillElements, errorDisplay) {
    try {
        const data = await getWeather(url);
        const locationText = `${data.location.name}, ${data.location.country}`;
        
        fillElements(
            data.current.condition.text,
            locationText,
            data.current.temp_c,
            data.current.feelslike_c,
            data.current.wind_mph,
            data.current.humidity
        );
    } catch (error) {
        errorDisplay(error.message);
    }
}


// Convert celsius to fahrenheit
export function convertCelsiustoFahrenheit(celsius) {
    const fahrenheit = ((celsius * 9/5) + 32).toFixed(1);
    return fahrenheit.endsWith('.0') ? fahrenheit.split('.')[0] : fahrenheit;
}

// Convert fahrenheit to celsius
export function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (((fahrenheit - 32) * 5/9)).toFixed(1);
    return celsius.endsWith('.0') ? celsius.split('.')[0] : celsius;
}