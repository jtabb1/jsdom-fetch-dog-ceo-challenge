let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    const st = document.getElementById("breed-dropdown");
    st.addEventListener("change", e => {
        let letter = e.target.value;
        selectBreedsStartingWith(letter);
    })

    fetchDogs();
    fetchBreeds();
});

function selectBreedsStartingWith(ltr) {
    listBreeds(breeds.filter( breed => breed.startsWith(ltr) ))
}

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
        img.alt = "An image of a dog.";
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
    const ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.innerText = breed;
        li.addEventListener("click", colorChange);
        ul.appendChild(li);
    });
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function colorChange(event) {
    event.target.style.color = "lightseagreen";
}