//Dog Facts API
const DOG_FACTS_URL = 'https://dog-api.kinduff.com/api/facts?number=5';
const DOG_PICS_URL = 'https://dog.ceo/api/breeds/image/random';

const dogFactEl = document.getElementById('dog-fact');
const dogPicEl = document.getElementById('dog-pic');
const newPicBtn = document.getElementById('new-pic');

async function loadDogPic()  {
    const response = await fetch(DOG_PICS_URL);
    const json = await response.json();
    console.log(json.message);
    const dogImage = json.message;
    const columnEl = document.createElement('div');
    columnEl.classList.add('column');
    
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    columnEl.appendChild(cardEl);

    const cardImageEl = document.createElement('div');
    cardImageEl.classList.add('card-image');
    cardEl.appendChild(cardImageEl);

    const figureEl = document.createElement('figure');
    figureEl.classList.add('image');
    cardImageEl.appendChild(figureEl);

    const imageEl = document.createElement('img');
    imageEl.src = dogImage;
    figureEl.appendChild(imageEl);

    dogPicEl.appendChild(columnEl);



}

const rememberUser = document.querySelector('.remember');
const form = document.querySelector('form');
const getName = document.querySelector('#entername');
const getEmail = document.querySelector('#enteremail');
const getPhone = document.querySelector('#enterphone');
const submitBtn = document.querySelector('#submitinput')

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

submitBtn.addEventListener('click', function () {
localStorage.setItem('name', getName.value);
localStorage.setItem('email', getEmail.value);
localStorage.setItem('phone', getPhone.value);

nameDisplayCheck();
})

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
    }
}

// var input = document.getElementsByClassName('formInput').value;
// localStorage.setItem('name', input);
// localStorage.setItem('email', input);
// localStorage.setItem('phone', input);

// document.getElementsByClassName('formInput').value = localStorage.getItem('name');
// document.getElementsByClassName('formInput').value = localStorage.getItem('email');
// document.getElementsByClassName('formInput').value = localStorage.getItem('phone');

/*const options = {
    headers: {
        'Content-Type': 'text/plain',
    },
    mode: 'no-cors',
    credentials: 'include',
};

async function loadDogFact() {
    fetch(DOG_FACTS_URL , options, {
        body:JSON.stringify(fact),
    }).then(result => console.log('success====:', result))
    .catch(error => console.log('error==========:', error));
}*/

function refreshGallery() {
  
}

//loadDogFact();

newPicBtn.addEventListener('click', loadDogPic);
