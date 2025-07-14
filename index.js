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
