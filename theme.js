const fbBtn = document.querySelector('.theme-buttons')
    // function inspectingEvent(e) {
    //     console.log(e.target)
    // }

// fbBtn.addEventListener('click', inspectingEvent)


const themeBtns = document.querySelectorAll('.theme-buttons')

function selectTheme(e) {
    let theme = e.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i])
        buttons[i].className = theme
    }
}

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}