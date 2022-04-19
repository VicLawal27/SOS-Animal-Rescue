// var API_KEY = 'B9jIb4yZiryaifQXKBzDgHBhE2AmwQ7a40glzNTEwWwdH43OHw';
var token = localStorage.getItem("access_key");
// console.log(token, "token from script js file")

const {access_token } = token;

var searchBtn = $('#search-button');


function searchAnimals() {

    //1. fetch the animals of location selected
    // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
var cityNameInput = $("#query").val(); 
console.log(cityNameInput); 
// console.log("URL", 'GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY); 
// define base api url
var baseURL = "api.petfinder.com/v2/animals";
// fetch animals by location
var options = {
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${access_token}`,
        "Access-Control-Allow-Origin": true,
        mode: "cors"
    }
}
fetch(`${baseURL}`, options).then(response => response.json()).then(data => console.log(data));
// display on page
    // fetch('GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data); 
    //     var location = data.location.city; 
    //     var API_URL = 'GET https://api.petfinder.com/v2/animals'+ location +'&appid='+API_KEY;
    
    
    // })
}


    console.log("Testingthe function ");


    //event listener 
 searchBtn.on('click', function (event) {
    event.preventDefault();
    searchAnimals()
 }); 