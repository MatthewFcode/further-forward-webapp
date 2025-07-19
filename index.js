// ROTATING IMAGE- HOME PAGE
// create a current index for the current image on
// create an array of all the images
// function that changes the index up one after a certain period of time
// conditional that checks for the index and adds the corrsct image for t the index
let currentIndex = 0
const images = [
  'images/istockphoto-1409329028-612x612.jpg',
  'images/elementor-placeholder-image.webp',
]

const img = document.getElementById('rotate')

function imgSwap() {
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length // loop back to 0
    img.src = images[currentIndex]
    imgSwap()
  }, 3000)
}

imgSwap()
// animating the page when entered
//animating for the play and the home page and the two first images on the about page
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let fadeClass = document.querySelectorAll('.fade-in-on-load')
    fadeClass.forEach((el) => {
      el.classList.add('visible')
    })
  }, 100)
})
//animating the page for the two about first paragraphs
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let fadeClass = document.querySelectorAll('.about-p-delay')
    fadeClass.forEach((el) => {
      el.classList.add('visible')
    })
  }, 500)
})

//WHACKING THE HAT

let cellArr = Array.from(document.querySelectorAll('.hat-whack-table td'))

console.log(cellArr)

let hatVisible = false
let hitTheHat = false
let gameStarted = false
let gameTimer = null

let table = document.querySelectorAll('.whack-bc')
console.log(table)

function chooseRandCell() {
  if (!gameStarted) return
  let randomIndex = getRandNum(cellArr)
  let randomCell = cellArr[randomIndex]

  console.log(randomCell)

  let img = document.createElement('img')
  img.src = 'images/whack-hat.png'
  img.alt = 'Hat'
  img.width = 200
  img.height = 120

  img.onclick = function (event) {
    event.stopPropagation()
    img.remove()
    let selectedHat = document.getElementById('selected-hat')
    selectedHat.removeAttribute('id')
    hitTheHat = true
    countScore()
    hatVisible = false
  }
  // table.forEach((el) => {
  //   el.classList.remove('whack-bc')
  // })

  randomCell.appendChild(img)
  randomCell.id = 'selected-hat'

  // document.getElementById('selected-hat').classList.remove('whack-bc')
  // table.forEach((el) => {
  //   el.classList.remove('whack-bc')
  // })
  hatVisible = true
}

function findHat() {
  cellArr.forEach((cell) => {
    cell.onclick = function () {
      if (!hatVisible && gameStarted) {
        chooseRandCell()
      } else if (!gameStarted) {
        startGame()
        chooseRandCell()
      }
    }
  })
}

findHat()

//WHACK THE COUNTER, START GAME AND RESTART GAME

let currentScore = 0

function countScore() {
  let score = document.getElementById('your-score')
  if (hitTheHat === true) {
    currentScore++
    score.innerHTML = `YOUR SCORE: ${currentScore}`
    hitTheHat = false
    //document.getElementById('your-score').innerHTML = currentScore
  }
}

function startGame() {
  gameStarted = true
  currentScore = 0
  document.getElementById(
    'your-score'
  ).innerHTML = `YOUR SCORE: ${currentScore}`

  gameTimer = setTimeout(() => {
    gameStarted = false
    alert(`Game Over! Your score: ${currentScore}`)
    const selected = document.getElementById('selected-hat')
    if (selected) {
      selected.innerHTML = ''
      selected.removeAttribute('id')
    }
    hatVisible = false
  }, 60000)
}

function restartGame() {
  let restartBtn = document.getElementById('restart-button')
  restartBtn.onclick = function () {
    if (gameTimer) {
      clearTimeout(gameTimer)
      gameTimer = null
    }

    currentScore = 0
    document.getElementById(
      'your-score'
    ).innerHTML = `YOUR SCORE: ${currentScore}`

    gameStarted = false
    hitTheHat = false
    hatVisible = false

    const selected = document.getElementById('selected-hat')
    if (selected) {
      selected.innerHTML = ''
      selected.removeAttribute('id')
    }
    console.log(
      'restart button has been clicked, waiting for user to click a cell to start the game again!'
    )
  }
}

restartGame()
//util functions
function getRandNum(arr) {
  let randNum = Math.floor(Math.random() * arr.length)
  return randNum
}
