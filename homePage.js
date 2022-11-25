const form=document.getElementById('form');
const signUp=document.getElementById('sign-up');

window.addEventListener('click' ,function(e){
    e.preventDefault();
});

signUp.addEventListener('click', ()=>{
    captcha_checker();
    password_checker();
    confirmPassword();
    firstNameValidation();
    lastNameValidation();
    emailValidation();
});

    // ---------------------------------------------------------------------------------------


            // Captcha Generator

const ref=document.getElementById('ref');
const input=document.getElementById('input');
const output=document.getElementById('output');

function random(e){

    var cap=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
    
    //This is generating random index

    var a=cap[Math.floor(Math.random()*62)];
    var b=cap[Math.floor(Math.random()*62)];
    var c=cap[Math.floor(Math.random()*62)];
    var d=cap[Math.floor(Math.random()*62)];
    var e=cap[Math.floor(Math.random()*62)];
    var f=cap[Math.floor(Math.random()*62)];
    let captcha=a+b+c+d+e+f;
    output.value=captcha;
    input.value="";
    }
    ref.addEventListener('click' ,random);
    window.addEventListener('load' ,random);

    // ---------------------------------------------------------------------------------------

    //Captcha Checker

    function captcha_checker(){
        if(input.value != output.value){
            input.value=""
            input.placeholder="Invalid"
            input.style.border="2px solid red";

        setTimeout(()=>{
            input.placeholder="Enter Your Captcha";
            input.style.border="2px solid black";
        },1000);
    }
    }

    // ---------------------------------------------------------------------------------------


//   Password Checker

function password_checker(){
    const passwordValue=document.getElementById('password').value;
    const inValid=document.getElementById('pass-div');
let upperCase=/[A-Z]/;
let lowerCase=/[a-z]/;
let number=/[0-9]/;
let specail=/[! @ # $ % ^ & * ( ) _ ]/;
let lowerCaseresult=lowerCase.test(passwordValue);
let upperCaseresult=upperCase.test(passwordValue);
let numberresult=number.test(passwordValue);
let specailresult=specail.test(passwordValue);



// console.log(passwordValue)
let length=passwordValue.split('').length;     //Password Length
    if(length<6){
        inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Password Length Should be minimum 6 digit"}`;
    setTimeout(()=>{
        inValid.innerHTML="";
    },1000)
}
else if(!(lowerCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one LowerCase Character"}`;
    setTimeout(()=>{
        inValid.innerHTML="";
    },1000)
}
else if(!(upperCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one UpperCase Character"}`
    setTimeout(()=>{
        inValid.innerHTML="";
    },1000)
}
else if(!(numberresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one Number Character"}`
    setTimeout(()=>{
        inValid.innerHTML="";
    },1000)
}
else if(!(specailresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast Special Character"}`
    setTimeout(()=>{
        inValid.innerHTML="";
    },1000);
}

}

    // ---------------------------------------------------------------------------------------


    // Validation  Between enter and confirm password

    function confirmPassword(){
    const passwordValue=document.getElementById('password').value;
    const confirmpassword=document.getElementById('confirm-password').value;
    let passDiv=document.getElementById('same-pass');
    if(passwordValue !=confirmpassword){
    passDiv.style.display="block";
        passDiv.innerText="Invalid";
        }
        setTimeout(()=>{
            passDiv.innerHTML="";
        },1000);
}


    // ---------------------------------------------------------------------------------------

// Validation for firstName

function firstNameValidation(){
    const fName=document.getElementById('f-name').value;
    const valid=document.getElementById('f-name-validation');
    let upperCase=/[A-Z]/;
    let firstChar=fName.split('')[0];
    if(fName==0){
        valid.style.display="block";
        valid.innerHTML="Enter your name";
        setTimeout(()=>{
            valid.innerHTML="";
        },1000);
    }
    else{
        if(!(upperCase.test(firstChar))){
            valid.style.display="block";
                valid.innerHTML="First Character Should be in Uppercase"
            }
            setTimeout(()=>{
                valid.innerHTML="";
            },1000);
    }
}

    // ---------------------------------------------------------------------------------------


// Validation for lastName

function lastNameValidation(){
    const lName=document.getElementById('l-name').value;
    const valid=document.getElementById('l-name-validation');
    let firstChar=lName.split('')[0];
    let upperCase=/[A-Z]/;
    if(lName==0){
        valid.style.display="block";
        valid.innerHTML="Enter your name";
        setTimeout(()=>{
            valid.innerHTML="";
        },1000);
    }
    else{
        if(!(upperCase.test(firstChar))){
            valid.style.display="block";
                valid.innerHTML="First Character Should be in Uppercase"
            }
            setTimeout(()=>{
                valid.innerHTML="";
            },1000);
    }
}


    // ---------------------------------------------------------------------------------------

    // validation for email address

    function emailValidation(){
        const email=document.getElementById('email').value;
        const emailval=document.getElementById('emailval');
        let regex=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        console.log(regex.test(email));
        if(!(regex.test(email))){
            emailval.style.display="block";
                emailval.innerHTML="Enter Valid Email Address";
            }
            setTimeout(()=>{
                emailval.innerHTML="";
            },1000);
        }
    
