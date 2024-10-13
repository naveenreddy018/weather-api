const url = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
let maindiv1 = document.getElementById("card1");
let maindiv2 = document.getElementById("card2");
let main = document.getElementsByClassName("main")
fetch(url).then(response => response.json()).then(data => {
    for (let key in data) {
        if (["latitude", "longitude", "generationtime_ms", "timezone", "timezone_abbreviation"].includes(key)) {
            let div1 = document.createElement("div");
            div1.className = "childdiv1";
            div1.innerText = `${key} : ${data[key]}`;
            maindiv1.appendChild(div1);
        }
    }

    for (let key in data.current_weather) {
        let div2 = document.createElement("div");
        div2.className = "childdiv2";
        const weather_unit = data.current_weather_units[key];
        div2.innerText = `${key} : ${data.current_weather[key]} ${weather_unit}`;
        maindiv2.appendChild(div2);
    }
});