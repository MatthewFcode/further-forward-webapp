// select all of the different classers and then add the css class for each of them that corresponds
let footerToggleEl = document.querySelectorAll(
  '.footer-init, .footer-table, .footer-link, .footer-divider-1, .toggle-ff'
)
let ffToggle = document.getElementById('toggle')
let isToggled = false

ffToggle.addEventListener('click', () => {
  footerToggleEl.forEach((el) => {
    el.classList.toggle('toggle')
  })

  // Swap image based on toggle state
  isToggled = !isToggled
  ffToggle.src = isToggled ? 'images/blackff.png' : 'images/whiteff.png'
})
