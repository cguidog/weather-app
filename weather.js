url = 'https://fcc-weather-api.glitch.me/api/current?'
var lat;
var lon;
var temp;
var low;
var high;
var unit = 'F';
var img;

window.onload = function getLocation() { //Gets current location.
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
     } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) { //Gets the longitud and latitude values to prepare the url for fetching.
lat = "lat=" + position.coords.latitude;
lon = "lon=" + position.coords.longitude;
getWeather(lat, lon);
} 


function getWeather(result) { //Sends weather request to server.
  fetch(url + lat + '&' + lon)
  .then((res) => (res.json()))
  .then(data => (showResults(data)));
  
}

function showResults(data) { //Displays city, and weather conditions.
  if (unit == 'C') {
  console.log(data.weather[0].id);
  document.getElementById('city').innerHTML = data.name;
  document.getElementById('condition').innerHTML = data.weather[0].description;
  temp = Math.round(data.main.temp);
  high = Math.round(data.main.temp_max);
  low = Math.round(data.main.temp_min);
    document.getElementById('temp').innerHTML = temp +' ' + unit;
    document.getElementById('high').innerHTML = high +' ' + unit; 
    document.getElementById('low').innerHTML = low +' ' + unit; 
    showIcon(data);
    
    
  }
  
  
  else {
  if (unit == 'F') {
      console.log(data);
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('condition').innerHTML = data.weather[0].main;
      temp = Math.round(((data.main.temp) * (9/5)) + 32);
      high = Math.round(((data.main.temp_max) * (9/5)) + 32);
      low = Math.round(((data.main.temp_min) * (9/5)) + 32);
      document.getElementById('temp').innerHTML = temp +' ' + unit;
      document.getElementById('high').innerHTML = high +' ' + unit; 
      document.getElementById('low').innerHTML = low +' ' + unit; 
    showIcon(data);
    }
  }
}

function showIcon(data) { //Displays an image according to the current weather conditions.
 if (200 < data.weather[0].id && data.weather[0].id < 233) {
  var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/thunder-icon.png';
    document.getElementById("image").appendChild(img);
  } else {
    if (299 < data.weather[0].id && data.weather[0].id < 532) {
      var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/Light-Showers-icon.png';
    document.getElementById("image").appendChild(img);
    } else {
      if (599 < data.weather[0].id && data.weather[0].id < 623) {
        var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/light-snow-icon.png';
    document.getElementById("image").appendChild(img);
      } else {
        if (700 < data.weather[0].id && data.weather[0].id < 782) {
          var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/fog-icon.png';
    document.getElementById("image").appendChild(img);
        } else {
          if (800 == data.weather[0].id) {
          var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/Sunny-icon.png';
    document.getElementById("image").appendChild(img);
        } else {
        if (800 < data.weather[0].id && data.weather[0].id < 805) {
          var img=document.createElement("img");
    img.src= 'http://icons.iconarchive.com/icons/custom-icon-design/weather/128/Cloudy-icon.png';
    document.getElementById("image").appendChild(img);
        } }
        }
      }
    }
  }
  



}

function convertUnit() { //Converts units from Farenheit to Celsius and viceversa.
  if (unit == 'F') {
    unit = 'C';
    temp = Math.round((temp - 32) / (9/5));
    high = Math.round((high - 32) / (9/5));
    low = Math.round((low - 32) / (9/5));
      document.getElementById('temp').innerHTML = temp +' ' + unit;
      document.getElementById('high').innerHTML = high +' ' + unit; 
      document.getElementById('low').innerHTML = low +' ' + unit; 
}
  else {
   if (unit == 'C') {
      unit = 'F';
    temp = Math.round((temp * (9/5)) + 32);
    high = Math.round((high * (9/5)) + 32);
    low = Math.round((low * (9/5)) + 32);
      document.getElementById('temp').innerHTML = temp +' ' + unit;
      document.getElementById('high').innerHTML = high +' ' + unit; 
      document.getElementById('low').innerHTML = low +' ' + unit; 
    }
  }
}


