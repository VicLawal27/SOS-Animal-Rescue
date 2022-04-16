//Dog Facts API
//https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1

const DOG_FACTS_URL = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';

async function getDogFacts() {
    const response = await fetch(DOG_FACTS_URL);
    const json = await response.json();
    console.log(json);
}

getDogFacts();