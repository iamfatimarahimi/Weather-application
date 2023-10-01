function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours <10){
        hours= `0${hours}`;
    }
    let minuets = date.getMinutes();
    if (minuets <10){
        minuets= `0${minuets}`;
    }
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minuets}`
}
let apiKey = `57a9ed06d8a8a6f501b0cd3f20bdc49a`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=57a9ed06d8a8a6f501b0cd3f20bdc49a&units=metric`;
function displayTempreture(response){
    console.log(response.data);
    let temperature = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionEelment = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    let dateElement = document.querySelector('#date');
    temperature.innerHTML =Math.round (response.data.main.temp);
    cityElement.innerHTML =response.data.name;
    descriptionEelment.innerHTML  = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000)
};

 axios.get(apiUrl).then(displayTempreture);