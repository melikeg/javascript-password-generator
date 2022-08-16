const uppers = "ABCDEFGHIJKLMNOPQRSTUWXVYZ";
const lowers = "abcdefghıjklmnopqrstuwxvyz";
const symbols = "~!@#$%^&*()-+=|";
const numbers = "0123456789";

const pw = document.querySelector(".pw");
const lenghtInput = document.querySelector("#lenghtInput");
const generateBtn = document.querySelector("#generate");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const uppersInput = document.querySelector("#uppers");
const lowersInput = document.querySelector("#lowers");
const alert = document.querySelector("#alert");

const generator = () => {
  let chars = "";
  let key = "";
  if (numbersInput.checked) {
    chars += numbers;
  }
  if (symbolsInput.checked) {
    chars += symbols;
  }
  if (uppersInput.checked) {
    chars += uppers;
  }
  if (lowersInput.checked) {
    chars += lowers;
  }
  if (chars == "") {
    showAlert("select at least one checkbox!");
  }
  for (let i = 1; i <= lenghtInput.value; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  pw.innerHTML = key;
};

function copyKey() {
  if (pw.innerHTML != "") {
    navigator.clipboard.writeText(pw.innerHTML);
    showAlert("Password copied!");
  } else {
    showAlert("Password not generated yet!");
  }
}

function showAlert(message) {
  alert.innerHTML = message;
  alert.style.visibility = "visible";

  const myTimeout = setTimeout(() => {
    alert.style.visibility = "hidden";
  }, 1000);
}
