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

function chooseRandCell() {
  let randomCell = getRandNum(cellArr)
  console.log(randomCell)
  let img = document.createElement('img')
  img.src = ''
  img.alt = 'Hat'
  img.width = 80
  img.height = 80
  img.onclick = function (event) {
    event.stopPropagation()
    img.remove()
  }
  cellArr.onclick = () => {
    randomCell.appendChild(img)
  }
}
chooseRandCell()

//util function
function getRandNum(arr) {
  let randNum = Math.floor(Math.random() * arr.length)
  return randNum
}
