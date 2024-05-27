const apiKey = "02afdc85af6ad56083da0c84a2f2aba4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".container-top input");
const searchBtn = document.querySelector(".container-top button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempur").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".huminaty").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if((data.weather[0].main == "Clear")){
        weatherIcon.src = "clear.png";
    }
    else if((data.weather[0].main == "Rain")){
        weatherIcon.src = "rain.png";
    }
    else if((data.weather[0].main == "Drizzle")){
        weatherIcon.src = "drizzle.png";
    }
    else if((data.weather[0].main == "Mist")){
        weatherIcon.src = "mist.png";
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})