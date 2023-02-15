const inputField = document.querySelector('#Anime-input')
const AnimeBtn = document.querySelector('#Anime-btn')
const AnimeList = document.querySelector('#Anime-list')

let newAnime = ''

function newAnimeHandler(e) {
    newAnime = e.target.value
    console.log(newAnime)
}

function addNewAnime() {
    let newPara = document.createElement('p')
    newPara.textContent = newAnime

    AnimeList.appendChild(newPara)

    inputField.value = ''
}

inputField.addEventListener('change', newAnimeHandler)
AnimeBtn.addEventListener('click', addNewAnime)