const passwordBox = document.querySelector('.password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symbols = "!@#$%&*()+-?><{}[]~/\\|";
const allCharacters = upperCase + lowerCase + digits + symbols;

function createPassword() {
  let password = ``;
  for (let i = 0; i < length; i++) {
    password = password + allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
  document.querySelector('.fa-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(password);
    document.querySelector('.fa-copy').classList.add('copied');
    setTimeout(() => {
      document.querySelector('.fa-copy').classList.remove('copied');
    }, 1500);
  });
}

document.querySelector('.generate-password').addEventListener('click', createPassword);
