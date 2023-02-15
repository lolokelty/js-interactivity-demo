let count = 0;

const counterText = document.querySelector('#counter');

// console.log(counterText)

//Plus
const plusBtn = document.querySelector('#plus-btn')

plusBtn.addEventListener('click', () => {
    count++
    counterText.textContent = count
});

//Minus
const minusBtn = document.querySelector('#minus-btn')

function decrease() {
    count--
    counterText.textContent = count
}

minusBtn.addEventListener('click', decrease)

//Reset 
const resetBtn = document.querySelector('#reset-btn')

function reset() {
    count = 0
    counterText.textContent = count
    alert('you reset the count!')
}

resetBtn.addEventListener('click', reset)

//////////////////////////////////////////////////////////////