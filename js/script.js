const btn = document.getElementById('cv')
const url = 'files/Emad Jammal Resume.pdf'
btn.addEventListener('click', function (e) {
  e.preventDefault() // Prevent the default link behavior

  // Create an anchor element to trigger the download
  const anchor = document.createElement('a');
  
  // Extract the file name from the URL (you can also set a custom file name)
  // const fileName = url.substring(url.lastIndexOf('/') + 1);
  anchor.href = url;
  anchor.download = ''; // Specify the desired file name

  // Trigger a click event on the anchor element
  anchor.click()
  anchor.remove();
    });


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