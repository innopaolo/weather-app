export function getWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
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