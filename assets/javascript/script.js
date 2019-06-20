// cities json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// cities array
const cities = array = [];

// json fetch data function
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))


