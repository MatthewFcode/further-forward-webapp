// get the element
// src changes on click
// change the src attribute
let imgArr = ['images/whack-hat.png', 'images/white-ff-hat.png']
console.log(imgArr)

let currentImg = 0
console.log(currentImg)

let hat = document.getElementById('change-the-hat')
hat.onclick = function () {
  console.log(hat)
  currentImg++
  if (currentImg > 1) {
    currentImg = 0
  }
  whichHat()
}

function whichHat() {
  if (currentImg === 0) {
    hat.src = 'images/whack-hat.png'
    hat.classList.remove('here')
  } else if (currentImg === 1) {
    hat.src = 'images/white-toggle-hat.png'
    hat.classList.add('here')
  }
}
