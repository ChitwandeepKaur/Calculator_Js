const input = document.getElementsByTagName('input')
const body = document.getElementsByTagName('body')

let number
let score=15
let highscore=0

//generates new number
function generateRandomNumber(){
  number = (Math.floor(Math.random()*20))+1
  console.log(number)
}

//new number generated wehn page is refreshed
generateRandomNumber()

//to display message
function displayMessage(string){
  document.getElementById('message').textContent=`${string}`
}
//functionality of the "again" button
document.getElementById('again').addEventListener('click',()=>{
  generateRandomNumber()
  score=15
  displayMessage('Start guessing...')
  document.getElementById('shownum').textContent ='?'
  document.querySelector('body').style.backgroundColor='rgb(34, 34, 34)'
  document.getElementById('score').textContent=score
  document.getElementById('shownum').style.width="8%"
  document.getElementById('shownum').style.left="45%"
})

//to update the score
function updateScore(){
  if(score==0){
    displayMessage("You lost! Restart the game")
  }
  else{
    score--
    document.getElementById('score').textContent=score
  }
  input[0].value=""
}

//when the "check" button is clicked
document.getElementById('submit').addEventListener('click',()=>{
  console.log(input[0].value)
  //correct number is entered
  if(input[0].value==number){
    document.getElementById('shownum').textContent =`${number}`
    displayMessage("Correct Number!")
    document.getElementById('shownum').style.width="12%"
    document.getElementById('shownum').style.left="42%"
    document.querySelector('body').style.backgroundColor='#60b347'
    input[0].value=""
    if(score>highscore){
      highscore = score
      document.getElementById('highscore').textContent =`${highscore}`
    }

  }
  //higher number
  else if(input[0].value>number){
    displayMessage("Too high!")
    updateScore()
  }
  else if(input[0].value == ""){
    displayMessage("⛔ No number!")
  }
  else{
    displayMessage("Too low!")
    updateScore()
  }
})