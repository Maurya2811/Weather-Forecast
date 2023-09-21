const apiKey = "4f72006d5062354fbfab6c6ac053fcc4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener('click', () => {
    document.querySelector(".weather").innerHTML="";
    checkWeather(searchBox.value);
});


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        const error = document.createElement('h3');
        error.textContent = "Please Enter a Valid Name !!";
        error.style ="text-center";
        const weather = document.querySelector(".weather");
        weather.appendChild(error);
    }else{
        var data = await response.json();
        //   console.log(data);
        drawStructure();
        updateInfo(data);
    }
}

function updateInfo(data) {
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = data.main.temp + "°c";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    // console.log(data.weather[0].main.toLowerCase());
    document.querySelector(".weather-icon").src=`images/${data.weather[0].main.toLowerCase()}.png`;
}


function drawStructure() {
    const weather = document.querySelector(".weather");
    // const weather = document.createElement('div');
    // weather.className = "weather";
    const img = document.createElement('img');
    img.className = "weather-icon";
    img.src = "";
    const h1 = document.createElement('h1');
    h1.className = 'temp';
    const h2 = document.createElement('h2');
    h2.className = 'city';
    const details = document.createElement('div');
    details.className = "details";
    const col1 = document.createElement('div');
    const img1 = document.createElement('img');
    img1.src = 'images/humidity.png';
    const humidDiv = document.createElement('div');
    const humidity = document.createElement('p');
    humidity.className = 'humidity';
    humidity.textContent = "#";
    const humidity1 = document.createElement('p');
    humidity1.textContent = "Humidity";

    const col2 = document.createElement('div');
    const img2 = document.createElement('img');
    img2.src = 'images/wind.png';
    const windDiv = document.createElement('div');
    const wind = document.createElement('p');
    wind.className = 'wind';
    wind.textContent = "#";
    const wind1 = document.createElement('p');
    wind1.textContent = "Wind-Speed";


    humidDiv.appendChild(humidity);
    humidDiv.appendChild(humidity1);
    col1.appendChild(img1);
    col1.appendChild(humidDiv);

    windDiv.appendChild(wind);
    windDiv.appendChild(wind1);
    col2.appendChild(img2);
    col2.appendChild(windDiv);
  
    details.appendChild(col1);
    details.appendChild(col2);

   weather.appendChild(img);
   weather.appendChild(h1);
   weather.appendChild(h2);
   weather.appendChild(details);
//    card.appendChild(weather);
}