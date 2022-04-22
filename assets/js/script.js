//var API_KEY = 'B9jIb4yZiryaifQXKBzDgHBhE2AmwQ7a40glzNTEwWwdH43OHw';
//var token = JSON.parse(localStorage.getItem("access_key"));
// console.log(token, "token from script js file")

//const { access_token } = token;
''
//var searchBtn = $('#search-button');


// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

// DOG PICS

let timer
let deleteFirstPhotoDelay

async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
  } catch (e) {
    console.log("There was a problem fetching the breed list.")
  }
}

start()

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
        }).join('')}
      </select>
  `
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    createSlideshow(data.message)
  }
}

function createSlideshow(images) {
  let currentPosition = 0
  clearInterval(timer)
  clearTimeout(deleteFirstPhotoDelay)
  
  if (images.length > 1) {
    document.getElementById("slideshow").innerHTML = `
  <div class="slide" style="background-image: url('${images[0]}')"></div>
  <div class="slide" style="background-image: url('${images[1]}')"></div>
  `
  currentPosition += 2
  if (images.length == 2) currentPosition = 0
  timer = setInterval(nextSlide, 3000)
  } else {
    document.getElementById("slideshow").innerHTML = `
  <div class="slide" style="background-image: url('${images[0]}')"></div>
  <div class="slide"></div>
  `
  }

  function nextSlide() {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
    deleteFirstPhotoDelay = setTimeout(function () {
      document.querySelector(".slide").remove()
    }, 1000)
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0
    } else {
      currentPosition++
    }
  }
}



// DOG PICS



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
// });

//HERE

//console.log("Calling api ", access_token)
//fetch( `https://api.petfinder.com/v2/animals?key=${API_KEY}&location=Atlanta,Georgia&type=dog`,
 //   {
//
  //      mode: 'cors',
//        headers: {
 //           Authorization: `Bearer ${access_token}`,
  //          "Access-Control-Allow-Origin": "*",
 //           'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //          'Content-Type': 'application/json',
  //          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
 //       },
//        method: 'GET',
//    }
//)
    
 //   .then(res => console.log(res.headers))
//    .then((data) => console.log(data.animals))
  //  .catch((err) => console.log(err));