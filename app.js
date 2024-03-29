//constants// 
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

//restart the game by removing mole from the grid//
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

//every time a fish/mole is clicked, add to the game score//
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})


function moveMole() {
  let timerId= null
  timerId = setInterval(randomSquare, 500)
}



moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
  clearInterval(countDownTimerId)
  clearInterval(timerId)
  alert('Game over! Your final score is: ' + result + ' fishes!')
 }
}

let countDownTimerId = setInterval(countDown, 1000)