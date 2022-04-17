//Dog Facts API
//https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1


const dogFactEl = document.getElementById('dog-fact-txt');
const newFactBtn = document.getElementById('new-fact');

const loadDogFacts = (numberOfFacts = 1) => {
    const DOG_FACTS_URL = `http://localhost:8010/proxy/api/v1/resources/dogs?number=${numberOfFacts}`;
    fetch(DOG_FACTS_URL)
        .then(response => response.json())
        .then(responseJson => {
        // TODO: Display facts on page
            for (let { fact } of responseJson) {
                console.log(fact);
                const dogFact = document.createElement('p');
                dogFact.innerText = fact;
                dogFactEl.append(dogFact);
            }
        })
}

newFactBtn.addEventListener('click', () => {
    
    loadDogFacts(1);
})