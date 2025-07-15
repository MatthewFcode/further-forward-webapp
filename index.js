// ROTATING IMAGE- HOME PAGE
// create a current index for the current image on
// create an array of all the images
// function that changes the index up one after a certain period of time
// conditional that checks for the index and adds the corrsct image for t the index
let currentIndex = 0
const images = [
  'images/istockphoto-1409329028-612x612.jpg',
  'images/IMG_1330.jpeg',
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
window.addEventListener('DOMContentLoaded', () => {
  let fadeClass = document.querySelectorAll('.fade-in-on-load')
  fadeClass.forEach((el) => {
    el.classList.add('visible')
  })
})

//WHACKING THE HAT

let cellArr = Array.from(document.getElementsByTagName('td'))
console.log(cellArr)

let hatVisible = false

let table = document.querySelectorAll('.whack-bc')
function chooseRandCell() {
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
      if (!hatVisible) {
        chooseRandCell()
      }
    }
  })
}

findHat()

//util function
function getRandNum(arr) {
  let randNum = Math.floor(Math.random() * arr.length)
  return randNum
}
