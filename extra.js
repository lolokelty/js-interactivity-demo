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

///need input Xchange
inputField.addEventListener('input', newAnimeHandler)
AnimeBtn.addEventListener('click', addNewAnime)

///code for Enter Key Bind
inputField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addNewAnime()
        console.log(13)
    }
    console.log('Test')
});

// document.getElementById('Anime-btn')
//     .addEventListener('keyup', function(event) {
//         if (event.code === 'Enter') {
//             event.preventDefault();
//             document.querySelector('form').submit();
//         }
//     });