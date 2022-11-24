const form=document.getElementById('form');
const signUp=document.getElementById('sign-up');

window.addEventListener('click' ,function(e){
    e.preventDefault();
});



            // Captcha Generator

const sub=document.getElementById('sub');
const ref=document.getElementById('ref');
const input=document.getElementById('input');
const output=document.getElementById('output');


function random(e){
    var cap=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
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

    signUp.addEventListener('click', ()=>{
        captcha_checker();
        password_checker();
    });
    



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

if(!(lowerCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one LowerCase Character"}`;
    
}
if(!(upperCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one UpperCase Character"}`
}

if(!(numberresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one Number Character"}`
}

if(!(specailresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast Special Character"}`
}
}


