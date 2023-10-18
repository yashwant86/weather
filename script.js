const apiKey = "583e674bd3118a26cabe50fc2179f062";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".input-box input");
const searchBtn = document.querySelector(".input-box button");
const weatherIcon = document.querySelector(".icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}` );
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "m/s";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main =="Thunderstorm"){
        weatherIcon.src = "images/storm.png";
    }
    document.querySelector(".weather-condition").style.display = "block";
}
searchBtn.addEventListener("click", function() {
    checkweather(searchInput.value);
});