const userInput = document.querySelector('.date');
const results = document.querySelector('.results');


function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // +1 -> month count is started from 0
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3 = y2 - y1;

  let m3, d3;

  if (m2 >= m1) {
    m3 = m2 - m1;
  }
  else {
    m3 = 12 + m2 - m1;
  }

  if (d2 > d1) {
    d3 = d2 - d1;
  }
  else {
    m3--;
    d3 = getDaysInMonths(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  if (y3 >= 0) {
    results.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
  }
  else {
    results.innerHTML = 'Please enter a valid date!';
  }
}

function getDaysInMonths(year, month) {
  return new Date(year, month, 0).getDate();
}

const button = document.querySelector('.button');

button.addEventListener('click', calculateAge);
