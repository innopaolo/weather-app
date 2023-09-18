// URL for getting JSON data
export function getAPIurl(apiKey, location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    return apiUrl;
}

// Get weather data and fill in elements
export async function fetchAndFillWeatherInfo(url, getWeather, fillDOM) {
    const data = await getWeather(url);
    const locationText = `${data.location.name}, ${data.location.country}`;
    fillDOM(
        data.current.condition.text,
        locationText,
        data.current.temp_c,
        data.current.feelslike_c,
        data.current.wind_mph,
        data.current.humidity
    );
} 

