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
    let days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minuets}`
}


function displayForecsat(){
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row"> `;
    let days = ["Thursday", "Friday", "Saturday" , "Sunday"];
    days.forEach(function(day){
        forecastHTML = forecastHTML + 
    `
              <div class="col-2">
                <div class="weather-forcast-date">${day}</div>
                
                <img
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="42px"
                />
                <br />
                <div class="weather-forecast-temp">
                  <span class="weather-forecast-max">18°</span>
                  <span class="weather-forecast-min">12°</span>
                </div>
              </div>
    `;
    })
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}


function search(city){
    let apiKey = `57a9ed06d8a8a6f501b0cd3f20bdc49a`;   
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTempreture);
}


function displayTempreture(response){
    let temperature = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionEelment = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    let dateElement = document.querySelector('#date');
    let iconElement = document.querySelector('#icon');
    celsiusTemperature = response.data.main.temp;
    temperature.innerHTML =Math.round (celsiusTemperature);
    cityElement.innerHTML =response.data.name;
    descriptionEelment.innerHTML  = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.setAttribute("src" , `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt" , response.data.weather[0].description)
};

search("Paris")
function handleSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-input")
    search(cityInput.value)
}
 function dispalyFarenheitTemp(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    // remove te active class:
        celsiusLink.classList.remove("active");
        farenheitlink.classList.add("active");
        let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
 }

 function displayCelsiusTemperature(event) {
        event.preventDefault();
        
        celsiusLink.classList.add("active");
        farenheitlink.classList.remove("active");
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
      }
 let celsiusTemperature = null;
 
 let form = document.querySelector("#search-form");
 form.addEventListener("submit",handleSubmit);


 let farenheitlink = document.querySelector("#fahrenheit-link");
 farenheitlink.addEventListener("click" , dispalyFarenheitTemp);

 let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", displayCelsiusTemperature);

      search("New York");
      displayForecsat();