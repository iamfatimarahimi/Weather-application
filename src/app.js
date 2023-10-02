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
    // let apiKey = `57a9ed06d8a8a6f501b0cd3f20bdc49a`;   
    // let city = "New York";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57a9ed06d8a8a6f501b0cd3f20bdc49a&units=metric`;
    // axios.get(apiUrl).then(displayTempreture);


function displayTempreture(response){
    let temperature = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionEelment = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    let dateElement = document.querySelector('#date');
    let iconElement = document.querySelector('#icon');
    temperature.innerHTML =Math.round (response.data.main.temp);
    cityElement.innerHTML =response.data.name;
    descriptionEelment.innerHTML  = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.setAttribute("src" , `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt" , response.data.weather[0].description)
};

 

function search (city){
    let apiKey = `57a9ed06d8a8a6f501b0cd3f20bdc49a`;
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57a9ed06d8a8a6f501b0cd3f20bdc49a&units=metric`;
    axios.get(apiUrl).then(displayTempreture);
}

search("Paris")
function handleSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-input")
    search(cityInput.value)
}
 let form = document.querySelector("#search-form");
 form.addEventListener("submit",handleSubmit)