export function getWeather(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);

            // Add at the bottom of the search bar error message
            const div = document.querySelector(".error-message");
            div.textContent = error;
        });
}

export function getUserLocation() {
    return fetch('http://www.geoplugin.net/json.gp')
        .then(response => response.json())
        .then(data => {
        return data.geoplugin_city;
        })
        .catch(error => {
            console.error('Error fetching location: ', error);
        });
}