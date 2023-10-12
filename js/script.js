const btn = document.getElementById('cv')
const url = 'https://download2277.mediafire.com/2c0r4ah26fug3W_5DrPASqKzoHZG7S0UuIgB9MPL3_D8HqZ8sQIejgOHsYO4Wh0u1vx6USffGYQv0OKu-avqpi8wh7UYpTFL1Auhz5Smx9dkd1Bg5iEiCrXJuhu5sTjpCIEN78h5HufaShsD2XUGXZ8l6IQwGHyjQoEeYAx53Bg53g/dcywiyf9cca2nj6/Emad+Jammal+Resume.pdf'
btn.addEventListener('click', function (e) {
  e.preventDefault()
  const anchor = document.createElement('a')
  anchor.href = url;
  anchor.click()
  anchor.remove()

})

// ! links
const dropdownLinks = document.getElementById('dropdownLinks')
const links = document.getElementById('links')
  console.log(window.innerWidth);
if (window.innerWidth < 992) {
  dropdownLinks.addEventListener('click', e => {
    $('#links').slideToggle();
  })
}