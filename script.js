// task 1 --------------------
const param = {
    'url' : "https://api.openweathermap.org/data/2.5/",
    'appiid' : "788fffb7dd12c4ea50f95dcaa3c2adc7"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appiid}`)
    .then(weather => {
        return weather.json();
    }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.temp').textContent = 'Temp: ' + data.main.temp;
    document.querySelector('.wind').textContent = 'Wind: ' + data.wind.speed;
    document.querySelector('.humidity').textContent = 'Humidity: ' + data.main.humidity;
    document.querySelector('.pressure').textContent = 'Pressure: ' + data.main.pressure;
    document.querySelector('.city').textContent = 'City: ' + data.name;
}

getWeather();
document.querySelector('#city').onchange = getWeather;