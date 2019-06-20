// cities json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// cities array
const cities = array = [];

// json data fetch  
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

// find matches function
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

// display matches function
function displayMatches(){
    const matchArray = findMatches(this.value, cities)
}
// search and suggestion query selector
const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestion');

// search event listeners keyup and change
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);