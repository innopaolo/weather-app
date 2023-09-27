export function getWeather(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}

export function getUserLocation() {
    return fetch('https://api.ipgeolocation.io/ipgeo?apiKey=f8b4bad8fee94cac9f4923fbd651e65f')
        .then(response => response.json())
        .then(data => {
            console.log(data.city, data.country_name);

            // Country data included in case of similar city names
            return data.city + " " + data.country_name;
        })
        .catch(error => {
            console.error('Error fetching location: ', error);
        });
}