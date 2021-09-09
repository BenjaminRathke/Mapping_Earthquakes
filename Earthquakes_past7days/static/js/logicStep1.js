// Add console.log to check to see if our code is working.
console.log("working");

//We create the street view tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

//Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/BenjaminRathke/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/BenjaminRathke/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/BenjaminRathke/Mapping_Earthquakes/main/majorAirports.json";

// Create a style for the lines.
//let myStyle = {
  //color: "blue",
  //fillColor: "#ffff00",
  //weight: 1

// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data, {
  //style: myStyle,
  //onEachFeature: function(features, layer) {
  //layer.bindPopup("<h2> Neighborhood: " + features.properties.AREA_NAME + "</h2>")}}).addTo(map)});


// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data).addTo(map);
//L.geoJson(data, {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2>" + 
     // "<hr> Airport name: " + feature.properties.name + "</hr>")
  //}
//}).addTo(map);

//Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
  //console.log(city)
  //L.circleMarker(city.location, {
    //radius: city.population/100000,
    //color: 'orange',
    //fillColor: '	#FFA500',
    //weight: 4
  //})
  //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//.addTo(map);
//});

//THE FOLLOWING METHOD MAY NOT BE THE BEST TO USE FOR THIS MODULE.
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
//    "type":"Feature",
//    "properties":{
//        "id":"3469",
//        "name":"San Francisco International Airport",
//        "city":"San Francisco",
//       "country":"United States",
//        "faa":"SFO",
//        "icao":"KSFO",
//       "alt":"13",
//        "tz-offset":"-8",
//        "dst":"A",
//        "tz":"America/Los_Angeles"},
//        "geometry":{
//            "type":"Point",
//            "coordinates":[-122.375,37.61899948120117]}}
//]};

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
//let line = [
  //[37.6213, -122.3790],
  //[30.18999924, -97.668663992],
  //[43.68401, -79.610321],
  //[40.641766, -73.780968]
//];

// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2>" + 
      //"<hr> Airport name: " + feature.properties.name + "</hr>")
//"<h2>" + feature.properties.name + "</h2>" + "<hr>" + feature.properties.city + ", " + feature.properties.country + "</hr>"
  //}
//}).addTo(map);

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
  //color: "blue",
  //dashArray: '10,20',
  //weight: 4,
  //opacity: 0.5
//}).addTo(map);