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
const alert = document.querySelector(".alert");
const strenghtLine = document.querySelector(".strenght-line");

const generator = () => {
  let chars = "";
  let key = "";
  let bar = 0;
  if (numbersInput.checked) {
    chars += numbers;
    bar += 0.25;
  }
  if (symbolsInput.checked) {
    chars += symbols;
    bar += 0.25;
  }
  if (uppersInput.checked) {
    chars += uppers;
    bar += 0.25;
  }
  if (lowersInput.checked) {
    chars += lowers;
    bar += 0.25;
  }
  if (chars == "") {
    showAlert("Select at least one checkbox!");
  }
  if (lenghtInput.value > 5 && lenghtInput.value < 25) {
    for (let i = 1; i <= lenghtInput.value; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    pw.innerHTML = key;
    showBarLine(bar);
  } else {
    showAlert("Character lenght must be in range of 5 - 25!");
  }
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
  alert.innerHTML = `${message}`;
  alert.style.bottom = "0";

  const myTimeout = setTimeout(() => {
    alert.style.bottom = "-50px";
  }, 1000);
}

function showBarLine(bar) {
  if (lenghtInput.value >= 8) {
    if (bar == 0.25) {
      strenghtLine.style.width = "25%";
      strenghtLine.style.backgroundColor = "#C21010";
    } else if (bar == 0.5) {
      strenghtLine.style.width = "40%";
      strenghtLine.style.backgroundColor = "#ffbb29";
    } else if (bar == 0.75) {
      strenghtLine.style.width = "60%";
      strenghtLine.style.backgroundColor = "#FFC23C";
    } else {
      strenghtLine.style.width = "100%";
      strenghtLine.style.backgroundColor = "#019267";
    }
  } else {
    if (bar >= 0.75) {
      strenghtLine.style.width = "50%";
      strenghtLine.style.backgroundColor = "#FFC23C";
    } else {
      strenghtLine.style.width = "25%";
      strenghtLine.style.backgroundColor = "#C21010";
    }
  }
}
