//for fetching the temperature data

function hideElements(){
    document.getElementById('celsius-dot').style.display = "none";
    document.getElementById('celsius-symbol').style.display = "none";
    document.getElementById('rain-desc-img').style.display = "none";
    document.getElementById('pressure-details').style.display = "none";
    document.getElementById('humid-details').style.display = "none";
    document.getElementById('visibility-details').style.display = "none";
    document.getElementById('uv-details').style.display = "none";
    document.getElementById('windSpeed-details').style.display = "none";
    document.getElementById('windDirection-details').style.display = "none";
    document.getElementById('mid-line1').style.display = "none";
    document.getElementById('mid-line2').style.display = "none";
    document.getElementById('sunrise-img').style.display = "none";
    document.getElementById('sun-set-img').style.display = "none";
    document.getElementById('rise-time').style.display = "none";
    document.getElementById('set-time').style.display = "none";

}

function showElements(){
    document.getElementById('celsius-dot').style.display = "block";
    document.getElementById('celsius-symbol').style.display = "block";
    document.getElementById('rain-desc-img').style.display = "block";
    document.getElementById('pressure-details').style.display = "block";
    document.getElementById('humid-details').style.display = "block";
    document.getElementById('visibility-details').style.display = "block";
    document.getElementById('uv-details').style.display = "block";
    document.getElementById('windSpeed-details').style.display = "block";
    document.getElementById('windDirection-details').style.display = "block";
    document.getElementById('mid-line1').style.display = "block";
    document.getElementById('mid-line2').style.display = "block";
    document.getElementById('sunrise-img').style.display = "block";
    document.getElementById('sun-set-img').style.display = "block";
    document.getElementById('rise-time').style.display = "block";
    document.getElementById('set-time').style.display = "block";
}

function fetchTempData(){
    let inputBox = document.getElementById('search-for-temp').value;

    if(inputBox ==""){
        alert("Please, give input");

    }else{
        fetch(`http://api.weatherstack.com/current?access_key=0a1a4aab75249dd32812c29dec401636&query=${inputBox}`).then((response)=>{
        
        return response.json();

        }).then((data)=>{

            let tempData = data.current;
            let weather_desc = tempData.weather_descriptions;
            let city_name = data.location; 
            let weather_icon = tempData.weather_icons;
            console.log(weather_icon);
            //thiw will show the main temperature 
            document.getElementById('main-temp').innerHTML = tempData['temperature'];

            showElements(); //to show the hide elements 

            //this will show the description of the clouds
            document.getElementById('description-of-clouds').innerHTML = weather_desc;

            //this will show the name of the searched city
            document.getElementById('searched-city').innerHTML = city_name['name'];


            document.getElementById('rain-desc-img').src = weather_icon;



            //for showing pressure
            document.getElementById('press-desc').innerHTML=tempData['pressure'];

            //for showing humidity
            document.getElementById('humidity-desc').innerHTML=tempData['humidity'];
            
            //for showing visibility
            document.getElementById('visibility-desc').innerHTML=tempData['visibility'];

            //for showing uv index
            document.getElementById('uv-desc').innerHTML=tempData['uv_index'];

            //for showing wind speed
            document.getElementById('windSpeed-desc').innerHTML=tempData['wind_speed'];

            //for showing wind direction
            document.getElementById('windDirection-desc').innerHTML=tempData['wind_dir'];

        });

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox}&appid=66cf5b2064d01d9d820c34754fa68a55`).then((response)=>{

            return response.json();
            }).then((data)=>{
                let sunrise_time = "";
                let sunset_time = "";
                let sunrise_epoc_time = data.sys['sunrise'];
                let sunset_epoc_time = data.sys['sunset'];

                  let myDate = new Date(sunrise_epoc_time *1000);
                  let sunrise_hours = myDate.getHours();  
                  let sunrise_minute = myDate. getMinutes();
                  let sunrise_sec = myDate.getSeconds();

                  let myDate1 = new Date(sunset_epoc_time *1000);
                  let sunset_hours = myDate1.getHours();  
                  let sunset_minute = myDate1. getMinutes();
                  let sunset_sec = myDate1.getSeconds();

                  sunrise_time = sunrise_hours + ":" + sunrise_minute + ":" + sunrise_sec +" AM ";
                  sunset_time = sunset_hours + ":" + sunset_minute + ":" + sunset_sec +" PM ";

                  document.getElementById('rise-time').innerHTML = sunrise_time;
                  document.getElementById('set-time').innerHTML = sunset_time;
                  
                });
    }
}