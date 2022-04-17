var API_KEY = 'B9jIb4yZiryaifQXKBzDgHBhE2AmwQ7a40glzNTEwWwdH43OHw';

var searchBtn = $('#search-button');


function searchAnimals() {

    //1. fetch the animals of location selected
    // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
var cityNameInput = $("#query").val(); 
console.log(cityNameInput); 
console.log("URL", 'GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY); 
    fetch('GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        var location = data.location.city; 
        var longitude = data.coord.lon;
        var API_URL = 'GET https://api.petfinder.com/v2/animals'+ latitude+'&lon='+ longitude +'&appid='+API_KEY+'&exclude=minutely,alerts,hourly&units=imperial';
    
    })}


    console.log("Testingthe function ");


    //event listener 
searchBtn.on('click', function (event) {
    event.preventDefault();
    searchAnimals()
}); 