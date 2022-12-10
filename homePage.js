const signUp = document.getElementById("sign-up");
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  captcha_checker();
  firstNameValidation();
  lastNameValidation();
  emailValidation();
});

const demno = document.getElementById("demo");
const demo2 = document.querySelector("#header");

// ---------------------------------------------------------------------------------------
// Captcha Generator

const ref = document.getElementById("ref");
const input = document.getElementById("input");
const output = document.getElementById("output");

function random(e) {
var cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  //This is generating random index
  var a = cap[Math.floor(Math.random() * 62)];
  var b = cap[Math.floor(Math.random() * 62)];
  var c = cap[Math.floor(Math.random() * 62)];
  var d = cap[Math.floor(Math.random() * 62)];
  var e = cap[Math.floor(Math.random() * 62)];
  var f = cap[Math.floor(Math.random() * 62)];
  let captcha = a + b + c + d + e + f;
  output.value = captcha;
  input.value = "";
}
ref.addEventListener("click", random);
window.addEventListener("load", random);

// ---------------------------------------------------------------------------------------

//Captcha Checker
function captcha_checker() {
if (input.value != output.value) {
    input.value = "";
    input.placeholder = "Invalid";
    input.style.border = "1px solid red";
    input.addEventListener("focus", (e) => {
    input.style.border = "1px solid black";
    input.value = "";
    input.placeholder = "Enter Your Captcha";
    });
    }
}

// ---------------------------------------------------------------------------------------
let flag = false;
const password = document.getElementById("password");
const ul = document.getElementById("ul");
password.addEventListener("input", () => {
    const upper = document.getElementById("uppercase");
    let up = localStorage.getItem("upperCase");
    if(!(upper)){
        if (up == "true") {
            ul.innerHTML += `<li id=uppercase>Atleast one uppercase</li>`;
            ul.style.display = "block";
            upper.style.color = "red";
        }
    }
    if(upper){
        let passwordValue = password.value;
        if (passwordValue.match(/[A-Z]/)) {
            upper.style.color = "green";
            flag=true;
    } 
    else {
    upper.style.color = "red";
    }
}
});


password.addEventListener("input", () => {
    const lower = document.getElementById("lowercase");
    let low = localStorage.getItem("lowercase");
    if(!(lower)){
        if (low == "true") {
            ul.innerHTML += `<li id=lowercase>Atleast one Lowercase</li>`;
            ul.style.display = "block";
        }
    }
    if(lower){
    let passwordValue = password.value;
    if (passwordValue.match(/[a-z]/)) {
    lower.style.color = "green";
    } 
    else {
    lower.style.color = "red";
    }
}
});

password.addEventListener("input", () => {
    const specialChar = document.getElementById("special");
    let special = localStorage.getItem("special");
    if(!(specialChar)){
        if (special == "true") {
            ul.innerHTML += `<li id=special>Atleast one Special Character</li>`;
            ul.style.display = "block";
        }
    }
    if(specialChar){
    let passwordValue = password.value;
    if (passwordValue.match(/[! @ # $ % ^ & * ( ) _ - ]/)) {
    specialChar.style.color = "green";
    } else {
    specialChar.style.color = "red";
    }
}
});

password.addEventListener("input", () => {
    const numberr = document.getElementById("number");
    let number = localStorage.getItem("number");
    if(!(numberr)){
    if (number == "true") {
        ul.innerHTML += `<li id=number>Atleast one number</li>`;
        ul.style.display = "block";
    }
}
if(numberr){
    let passwordValue = password.value;
  if (passwordValue.match(/[0-9]/)) {
    numberr.style.color = "green";
  } else {
    numberr.style.color = "red";
  }
}
});

password.addEventListener("input", () => {
    const length = document.getElementById("length");
    let len = localStorage.getItem("passwordLength");
    if(!(length)){
        ul.style.display = "block";
        ul.innerHTML += `<li id=length>Atleast ${len} character`;
    }
let passwordValue = password.value;
  if (passwordValue.split("").length < len) {
    length.style.color = "red";
} else {
    length.style.color = "green";
  }
});

// ---------------------------------------------------------------------------------------

// Validation  Between enter and confirm password

const confirmpassword = document.getElementById("confirm-password");
confirmpassword.addEventListener('input',()=>{
    confirmPasword();
})
function confirmPasword() {
const password = document.getElementById("password");
let passwordValue = password.value;
let passDiv = document.getElementById("same-pass");
const confirmpassword = document.getElementById("confirm-password");
let confirmpasswordValue = confirmpassword.value;
if (passwordValue != confirmpasswordValue){
    passDiv.style.display = "block";
    passDiv.innerText = "Enter correct password";
    confirmpassword.style.border = "1px solid red";
}
if (passwordValue == confirmpasswordValue){
    passDiv.style.display = "none";
    passDiv.innerText = "Password dosen't match";
    confirmpassword.style.border = "1px solid transparent";
}
}


// ---------------------------------------------------------------------------------------

// Validation for firstName

function firstNameValidation() {
  const fName = document.getElementById("f-name");
  const fnameValue = fName.value;
  const valid = document.getElementById("f-name-validation");
  let upperCase = /[A-Z]/;
  let firstChar = fnameValue.split("")[0];
  if (fnameValue == 0) {
    valid.style.display = "block";
    valid.innerHTML = "Enter your name";
    fName.style.border = "1px solid red";
    fName.addEventListener("focus", () => {
      valid.style.display = "none";
      valid.innerHTML = "";
      fName.style.border = "1px solid black";
    });
  }
}
// ---------------------------------------------------------------------------------------

// Validation for lastName

function lastNameValidation() {
  const lName = document.getElementById("l-name");
  const lNameValue = lName.value;
  const valid = document.getElementById("l-name-validation");
  let firstChar = lNameValue.split("")[0];
  let upperCase = /[A-Z]/;
  if (lNameValue == 0) {
    valid.style.display = "block";
    valid.innerHTML = "Enter your  surname";
    lName.style.border = "1px solid red";
    lName.addEventListener("focus", () => {
      valid.style.display = "none";
      valid.innerHTML = "";
      lName.style.border = "1px solid black";
    });
  }
}

// ---------------------------------------------------------------------------------------

// validation for email address

function emailValidation() {
  const email = document.getElementById("email");
  const emailValue = email.value;
  localStorage.setItem("backgroundColor", `${emailValue}`);
  const emailval = document.getElementById("emailval");
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!regex.test(emailValue)) {
    emailval.style.display = "block";
    email.style.border = "1px solid red";
    emailval.innerHTML = "Enter Valid Email Address";
    email.addEventListener("focus", () => {
      emailval.style.display = "none";
      email.style.border = "none";
    });
  }
}

// ---------------------------------------------------------------------------------------

//for search box

const searchBox = document.getElementById("search-box");
const searchBoxValue = searchBox.value;
const searchicon = document.getElementById("search-icon");

searchBox.addEventListener("input", () => {
  searchicon.style.display = "none";
});
searchBox.addEventListener("blur", () => {
  if (searchBoxValue == " ") {
    searchicon.style.display = "block";
  }
});

// ---------------------------------------------------------------------------------------

const body = document.getElementById("container");
let col = localStorage.getItem("backgroundColor");
body.style.backgroundColor = `${col}`;
// localStorage.clear();
