'use strict';

//Player score elements
const score0El = document.getElementById('score--0'),
      score1El = document.getElementById('score--1'),
      diceEl   = document.querySelector('.dice'),
      rollBtn  = document.querySelector('.btn--roll'),
      newBtn   = document.querySelector('.btn--new'),
      holdBtn  = document.querySelector('.btn--hold'),
      player0El  = document.querySelector('.player--0'),
      player1El  = document.querySelector('.player--1'),
      currentScore0El = document.getElementById('current--0'),
      currentScore1El = document.getElementById('current--1'),
      scores = [ 0, 0 ]

let currentScore = 0,
    activePlayer = 0,
    playing      = true

    init()

function init(){
    currentScore = 0,
    activePlayer = 0,
    playing      = true
    scores[0] = 0
    scores[1] = 0
    score0El.textContent = 0
    score1El.textContent = 0
    currentScore0El.textContent = 0
    currentScore1El.textContent = 0
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    diceEl.classList.add('hidden')
}
//rolling dice functionality
rollBtn.addEventListener('click', function(){
    if(playing) rollDice()
})

function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6 + 1)

    diceEl.classList.remove('hidden')

    diceEl.src = `dice-${randomNumber}.png`

    if(randomNumber !== 1) {
        currentScore += randomNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else {
        togglePlayer()
    }
}

//hold fucntionality
holdBtn.addEventListener('click', function(){
    if(playing) {
        scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    if(scores[activePlayer] >= 100){
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        diceEl.classList.add('hidden')
    }
    togglePlayer()
    }
})

function togglePlayer(){
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

newBtn.addEventListener('click', init)