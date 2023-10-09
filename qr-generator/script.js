let results = document.querySelector('.results');
let text = document.querySelector('.input');
text.focus();

function generateQRCode() {
  const existingImages = results.querySelectorAll('.image');
  existingImages.forEach(image => {
    results.removeChild(image);
  });
  const newImage = document.createElement('img');
  newImage.classList.add('image');
  const qrText = text.value;
  newImage.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrText}&size=100x100`;
  if (text.value.trim() != '') {
    results.appendChild(newImage);
  }
  else {
    text.placeholder = `Please enter something!!`;
  }
}

document.querySelector('.button').addEventListener('click', () => {
  generateQRCode();
  text.value = '';
  text.focus();
});
text.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    generateQRCode();
    text.value = '';
    text.focus();
  }
});