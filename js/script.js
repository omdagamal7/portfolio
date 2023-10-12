const btn = document.getElementById('cv')
const path = '../files/Emad Jammal Resume.pdf'
btn.addEventListener('click', function (e) {
  e.preventDefault()
  const anchor = document.createElement('a')
  anchor.href = path;
  anchor.download
  anchor.click()

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

// ! loader

$('.loader').delay(1000).fadeOut(500);