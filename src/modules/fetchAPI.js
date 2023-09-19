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
    return fetch('https://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            return data.city;
        })
        .catch(error => {
            console.error('Error fetching location: ', error);
        });
}