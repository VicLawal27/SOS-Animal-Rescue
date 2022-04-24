//Dog Facts API
const DOG_FACTS_URL = 'https://dog-api.kinduff.com/api/facts?number=5';
const DOG_PICS_URL = 'https://dog.ceo/api/breeds/image/random';

const dogFactEl = document.getElementById('dog-fact');
const dogPicEl = document.getElementById('dog-pic');
const newPicBtn = document.getElementById('new-pic');

async function loadDogPic() {
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

function refreshGallery() {}

//loadDogFact();

newPicBtn.addEventListener('click', loadDogPic);

function doggo() {
  fetch('https://dog.ceo/api/breed/mix/images')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 3; i++) {
        var dogImg = data.message[i];

        var card = document.createElement('div');
        var cardImg = document.createElement('div');
        var cardFig = document.createElement('figure');
        var figureImg = document.createElement('img');
        var cardContent = document.createElement('div');
        var dogName = document.createElement('h2');

        card.setAttribute('class', 'card column is-one-quarter');
        cardImg.setAttribute('class', 'card-image');
        cardFig.setAttribute('class', 'image is-4by3');
        figureImg.setAttribute('src', dogImg);
        figureImg.setAttribute('alt', 'dog Image');
        cardContent.setAttribute('class', 'card-content');
        dogName.textContent = 'Breed: unkown Age: 3 Shelter Location: City';

        cardFig.append(figureImg);
        cardImg.append(cardFig);
        cardContent.append(dogName);
        card.append(cardImg, cardContent);
        document.getElementById('dog-cards').append(card);
      }
    });
}
doggo();
