'use strict';

let random          = getRandomNumber(),
    displayMessage  = document.getElementsByClassName('message')[0],
    bodyStyle       = document.getElementsByTagName('body')[0].style,
    score           = 20,
    number          = document.querySelector('.number'),
    checkButton     = document.querySelector('.check'),
    gameTitle       = document.querySelector('.gameTitle'),
    highscore       = 0

function getRandomNumber() {
    return Math.floor(Math.random()*20 + 1)
}
function changeScore(messageString){
    displayMessage.innerHTML = messageString
    score--
    document.querySelector('.score').textContent = score
    if(score === 0){
        bodyStyle.backgroundColor = 'red'
        checkButton.disabled      = true
        gameTitle.textContent     = 'Game Over! 👎'
        checkButton.classList.add('not-allowed')
    }
}

function updateHighscore(){
    if(score > highscore) highscore = score
    document.querySelector('.highscore').textContent = highscore
}

function checkNumber() {
    const enteredNumber = Number(document.getElementsByClassName('guess')[0].value)

    if(score > 0){
        if(enteredNumber === 0) displayMessage.innerHTML  = '🚫 No Number!'
        else if (enteredNumber === random){
            displayMessage.innerHTML  = '🎉 Correct Answer!'
            bodyStyle.backgroundColor = '#60b347'
            number.textContent = String(random)
            updateHighscore()
        }
        else if (enteredNumber > random) changeScore('📈 Too High!')
        else                             changeScore('📉 Too Low!')
    }
}

function reset(){
    document.getElementsByClassName('guess')[0].value = ''
    displayMessage.innerHTML  = 'Start guessing...'
    random                    = getRandomNumber()
    bodyStyle.backgroundColor = '#222'
    number.textContent        = '?'
    checkButton.disabled      = false
    gameTitle.textContent     = 'Guess my Number!'
    score                     = 20
    document.querySelector('.score').textContent = score
    checkButton.classList.remove('not-allowed')
}