let apikey = '0b6f88a0b0a6ef24ffe96d344c46676c'
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchBox = document.querySelector(".search input")
let searchButton= document.querySelector(".search button")
let weathericon = document.querySelector(".weather-icon")
async function checkWeather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
            //console.log(response)
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src = "images/clouds.png"
    }
    else if (data.weather[0].main=="Clear"){
        weathericon.src = "images/clear.png"
    }
    else if (data.weather[0].main=="Rain"){
        weathericon.src = "images/rain.png"
    }
    else if (data.weather[0].main=="Drizzle"){
        weathericon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main=="Mist"){
        weathericon.src = "images/mist.png"
    }

    document.querySelector(".weather").style . display ="block"
    //document.querySelector(".error").style.display="none"
}
    }

searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})
