console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    // fetchDogs();
    fetchBreeds();
});

// const st = document.getElementById("breed-dropdown");
// console.log(st);
// const dv = document.getElementById('dog-image-container');
// console.log(dv);
let breeds = [];

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderDogs(json));
}

function renderDogs(dogsObj) {
    const dogsArr = dogsObj.message;
    const picsDiv = document.getElementById('dog-image-container');
    dogsArr.forEach(dog => {
        const img = document.createElement('img');
        img.src = dog;
        img.alt = "An image of a dog."
        picsDiv.appendChild(img);
    });
  }

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message);
            listBreeds(breeds);
        });
}

function listBreeds(breeds) {
    breeds.forEach(breed => {
        const ul = document.getElementById("dog-breeds");
        const li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);
    });
}

