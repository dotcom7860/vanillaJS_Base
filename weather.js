const weather = document.querySelector(".js-weather");

const API_KEY = "283cf57e7cea5cb08f066be4827a0670";
const COORDS = "coords";

function getweather(lat, log){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getweather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoord = localStorage.getItem(COORDS);
    if(loadedCoord === null){
        askForCoord();
    }else{
        const parsedCoord = JSON.parse(loadedCoord);
        getweather(parsedCoord.latitude, parsedCoord.longitude);
    }
}

function init(){
    loadCoords();
}

init();