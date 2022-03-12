const form = document.querySelector('form');
const cityname = document.querySelector('.cityname');
const temp = document.querySelector('.temp');
const dateday = document.querySelector('.dateday');
const sunrisesunset = document.querySelector('.sunrisesunset');
const typeofweather = document.querySelector('.typeofweather');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const borderbox = document.querySelector('.borderbox2');

function getWeather(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0844b6ef986902c0d45c3a71041ef58f&units=metric`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{

        const sunrise = new Date(data.sys.sunrise*1000);
        const sunrisehr = sunrise.toLocaleString("en-US", {hour:"numeric", minute: "numeric", hour12: true});
        const sunset = new Date(data.sys.sunset*1000);
        const sunsethr = sunset.toLocaleString("en-US", {hour:"numeric", minute: "numeric", hour12: true});
        const datefromTimeStamp = new Date(data.dt*1000);
        const month = datefromTimeStamp.toLocaleString("en-US",{month:"long"});
        const date = datefromTimeStamp.toLocaleString("en-US",{day:"numeric"});
        const day = datefromTimeStamp.toLocaleString("en-US",{weekday:"long"});
        const hr = datefromTimeStamp.toLocaleString("en-US", {hour:"numeric", minute: "numeric", hour12: true});
        const weathertype = data.weather[0].main;
        const icon = data.weather[0].icon;
        const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        var img = document.createElement('img');
        img.src=imageURL;

        cityname.textContent = `${data.name}`;
        temp.textContent=`${data.main.temp}\xB0C`;
        sunrisesunset.textContent=`Sunrise : ${sunrisehr} | Sunset: ${sunsethr}`;
        dateday.textContent = `${day}, ${date} ${month}, ${hr}`;
        typeofweather.textContent = `${weathertype}`;
        typeofweather.appendChild(img);
        humidity.textContent =`${data.main.humidity}%`;
        pressure.textContent =`${data.main.pressure}hPa`;
    })
    .catch((err)=>{
        alert("Invalid city name. Please try again!");
    });
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const city = e.target[0].value;
    getWeather(city);
    borderbox.style.borderColor = "#064635";

    e.target[0].value="";
})