var infoDump
var succsessCallback = (position) => {
    console.log(position)
}

var errorCallback = (error) => {
    console.error(error)
}

navigator.geolocation.getCurrentPosition(succsessCallback, errorCallback)

fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.603837&lon=-58.381558&appid=61bcf65395b66cafc31a1800a17df5c8&units=metric')
    .then((res)=> res.json())
    .then((res)=> {
        document.getElementById("mainTemp").innerHTML = `${parseInt(res.main.temp)}C°`

        document.getElementById("descTemp").innerHTML = `
        ${res.weather[0].description} <br>
        Zone: ${res.name}`

        document.getElementById("leftInfo").innerHTML = `
        Temp Max: ${parseInt(res.main.temp_max)}C°<br>
        Temp Min: ${parseInt(res.main.temp_min)}C°<br>
        Feels Like: ${parseInt(res.main.feels_like)}C°<br>`

        document.getElementById("rightInfo").innerHTML = `
        Cloudiness: ${res.clouds.all}<br>
        Humidity: ${res.main.humidity}<br>`

        console.log(res);
})
