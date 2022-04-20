//Dog Facts API
const DOG_FACTS_URL = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
const DOG_PICS_URL = 'https://dog.ceo/api/breeds/image/random';


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

loadDogPic();
newPicBtn.addEventListener('click', loadDogPic);