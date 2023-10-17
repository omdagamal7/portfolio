


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

let num = 1;
if (num == 1) {
  $('.loader').delay(600).fadeOut(300);
  num++
}