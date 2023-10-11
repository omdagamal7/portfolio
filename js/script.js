const btn = document.getElementById('cv')
const url = 'https://download2277.mediafire.com/wj1l3ian5ckg6J5WJPtGx7uuOdOmy-Kta61V6Uqv7CwLSNYMo26d8lKkTIXu17kID5x_0dpalC-YT4SX97lKyVK3cEjxk1QWibiXgQs9zEvOQ2vzfEU5hKKysqmiWknxguYdiXMKCCHSvZPYia_IQU6CZ8ObulpQ-9wqaEVzgm99Tw/dcywiyf9cca2nj6/Emad+Jammal+Resume.pdf'
btn.addEventListener('click', e => {
  e.preventDefault();
  fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file)
    console.log(tempUrl);
    let anchor = document.createElement('a');
    anchor.href = tempUrl;
    anchor.download = 'Emad Jammal Resume'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  })
})
const dropdownLinks = document.getElementById('dropdownLinks')
const links = document.getElementById('links')
  console.log(window.innerWidth);
if (window.innerWidth < 992) {
  dropdownLinks.addEventListener('click', e => {
    $('#links').slideToggle();
  })
}
