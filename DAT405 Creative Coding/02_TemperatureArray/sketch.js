//http://api.openweathermap.org

//In this example we use an array of locations, and when the program runs, it will
//select one location randomly. Based on the weather conditions the background color will change
let locationArray = ["Plymouth", "London", "Paris", "Berlin", "Athens", "Shanghai"];
let randomLocation;
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
let weather = [];

function preload() {
  //randomLocation stores just one city that is returned from the locationArray
  //Within the square brackets of locationArray[] a round random number is called (integer / not float)
  //This random number will be between 0 and the location.Array.lengh-1 (that is from 0 to 5)
  //Based on the random number selected, the city that is saved in that array position will return to randomLocation
  //randomLocation = locationArray[round(random(locationArray.length-1))];
  for (let i = 0; i < locationArray.length; i++) {
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+locationArray[i]+"&units=metric&appid="+apiKey;
    weather[i] = loadJSON(url);
    console.log(weather[i]);
  }
}

function setup() {
  //console.log("Location: " + randomLocation)
  //console.log("Temperature: " + weather.main.temp + "°C");
  //console.log("Temperature (min): " + weather.main.temp_min + "°C");
  //console.log("Temperature (max): " + weather.main.temp_max + "°C");
  //console.log("Humidity: " + weather.main.humidity);
  //console.log("Pressure: " + weather.main.pressure);

  createCanvas(600, 600);
  //textAlign(CENTER);
  textSize(24);
  noLoop();
}

function draw() {
  let mapColor = [];
  //According to the data returned from the JSON object, we use the current temperature of the city
  //to control the background color. The following conditional statements will evaluate only one option (thus, one color)
  for (let i=0; i<weather.length; i++){

  if (weather[i].main.temp<-5){
    mapColor[i] = color(36, 194, 203, 255);
  }
  if (weather[i].main.temp>-5 && weather[i].main.temp<=5){
    mapColor[i] = color(196, 208, 234, 255);
  }
  if (weather[i].main.temp>5 && weather[i].main.temp<10){
    mapColor[i] = color(234, 231, 222, 255);
  }
  if (weather[i].main.temp>10 && weather[i].main.temp<20){
    mapColor[i] = color(234, 208, 155, 255);
  }
  if ( weather[i].main.temp>20){
  mapColor[i] = color(234, 143, 0, 255);
  }

  var pos = i * 200

  if (pos < 600) {
    fill(mapColor[i]);
    rect(pos, 0 , width/2, height/2);
    fill(0);
    text(locationArray[i], pos+10, height/6-30);
    text("Temperature: " + weather[i].main.temp + "°C", pos+10, height/6);
    text("Humidity: "  + weather[i].main.humidity + "°%", pos+10, height/6+30);
  }
  else {
    console.log(mapColor[i]);
    fill(mapColor[i]);
    rect(pos-600, 300, width/2, height/2);
    fill(0);
    text(locationArray[i], pos-590, height-180);
    text("Temperature: " + weather[i].main.temp + "°C", pos-590, height-150);
    text("Humidity: "  + weather[i].main.humidity + "°%", pos-590, height-120)
  }
  //background(mapColor);
  //fill(0);
  //text(randomLocation, width/2, height/2-30);
  //text("Temperature: " + weather.main.temp + "°C", width/2, height/2-0);
  //text("Humidity: " + weather.main.humidity + "%", width/2, height/2+30);
  }
}
