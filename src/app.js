let apiKey = `57a9ed06d8a8a6f501b0cd3f20bdc49a`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=57a9ed06d8a8a6f501b0cd3f20bdc49a&units=metric`;
function displayTempreture(response){
    console.log(response.data);
    let temperature = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionEelment = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    temperature.innerHTML =Math.round (response.data.main.temp);
    cityElement.innerHTML =response.data.name;
    descriptionEelment.innerHTML  = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
};
 axios.get(apiUrl).then(displayTempreture);