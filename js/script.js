const btn = document.getElementById('cv')
const url = 'https://s11.mega4down.com:183/d/7urmx4bdirfyuxkc2pebvlavzg6a7a5d2u272p4tnhj2sygp4endjlkvpnj75wjwnq2lk7vv/Emad%20Jammal%20Resume.pdf'
function downloadFile(data, filename, mimeType) {
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

const textData = "This is the content of the file.";
const fileName = "Emad Jammal Resume";
const mimeType = 'application/pdf';

btn.addEventListener('click', e => {
  downloadFile(textData, fileName, mimeType);
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



