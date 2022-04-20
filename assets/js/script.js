var API_KEY = 'B9jIb4yZiryaifQXKBzDgHBhE2AmwQ7a40glzNTEwWwdH43OHw';
var token = JSON.parse(localStorage.getItem("access_key"));
// console.log(token, "token from script js file")

const {access_token } = token;
''
var searchBtn = $('#search-button');


 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');


// function searchAnimals() {

//     //1. fetch the animals of location selected
//     // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// var cityNameInput = $("#query").val(); 
// console.log(cityNameInput); 
// // console.log("URL", 'GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY); 
// // define base api url
// var baseURL = "https://api.petfinder.com/v2/animals"+ cityNameInput+'&appid='+API_KEY;
// // fetch animals by location
// var options = {
//     method: 'GET',
//     headers: {
//         "Authorization": `Bearer ${access_token}`,
//         "Access-Control-Allow-Origin": true,
//         mode: "cors",
//         // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
//     }
// }



// console.log(baseURL, options); 
// fetch(`${baseURL}`, options).then(response => response.json()).then(data => console.log(data));
// // display on page
//     // fetch('GET https://api.petfinder.com/v2/animals'+ cityNameInput+'&appid='+API_KEY)
//     // .then(response => response.json())
//     // .then(data => {
//     //     console.log(data); 
//     //     var location = data.location.city; 
//     //     var API_URL = 'GET https://api.petfinder.com/v2/animals'+ location +'&appid='+API_KEY;
    
    
//     // })
// }


//     console.log("Testingthe function ");


//     //event listener 
//  searchBtn.on('click', function (event) {
//     event.preventDefault();
//     searchAnimals()
//  }); 

console.log("Calling api ", access_token)
 fetch(
    `https://api.petfinder.com/v2/animals?key=${API_KEY}&location=Atlanta,Georgia&type=dog`,
    {

        mode: 'cors', 
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      },
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then(res => console.log(res.headers))
     .then((data) => console.log(data.animals))
    .catch((err) => console.log(err));