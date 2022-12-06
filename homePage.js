const signUp=document.getElementById('sign-up');

signUp.addEventListener('click', (e)=>{
    e.preventDefault();
    captcha_checker();
    
    confirmPassword();
    firstNameValidation();
    lastNameValidation();
    emailValidation();
});
    const demno=document.getElementById('demo');
    // console.log(demo.innerText);
    const demo2=document.querySelector('#header');
    console.log(demo2);
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
            input.value="";
            input.placeholder="Invalid";
            input.style.border="1px solid red";
            input.addEventListener('focus',(e)=>{
                input.style.border="1px solid black";
                input.value="";
                input.placeholder="Enter Your Captcha";
            });
        }
    }
    
    // ---------------------------------------------------------------------------------------
    
    
    //   Password Checker
    
    
    password.addEventListener('input',()=>{
        const upper=document.getElementById('uppercase');
    const lower=document.getElementById('lowercase');
    const number=document.getElementById('number');
    const special=document.getElementById('special');
    const length=document.getElementById('length');
    const password=document.getElementById('password');
    const ul=document.getElementById('ul');
        let numberFlag=false;
        let passwordValue=password.value;
        ul.style.display='block';
        if(passwordValue.match(/[0-9]/)){
            number.style.color="green";
            numberFlag=true;   
        }
        else{
            number.style.color="red";
        }
        let lowerFlag=false
        if(passwordValue.match(/[a-z]/)){
            lower.style.color="green";
            lowerFlag=true;   
        }
        else{
            lower.style.color="red";
        }
        let upperFlag=false
        if(passwordValue.match(/[A-Z]/)){
            upper.style.color="green";
            upperFlag=true;   
        }
        else{
            upper.style.color="red";
        }
        let specialFlag=false
        if(passwordValue.match(/[! @ # $ % ^ & * ( ) _ - ]/)){
            special.style.color="green";
            specialFlag=true;   
        }
        else{
            special.style.color="red";
        }
        let lengthFlag=false
        if(passwordValue.split('').length<7){
            console.log(passwordValue.split(''));
            length.style.color='red';
        }
        else{
            lengthFlag=true;
            length.style.color='green'
        }
        if(numberFlag && lowerFlag && upperFlag && specialFlag &&lengthFlag){
            ul.style.display='none';
            // console.log("Hello");
        }
        password.addEventListener('blur',()=>{
            ul.style.display='none'
        })
    })
    



    // ---------------------------------------------------------------------------------------


    // Validation  Between enter and confirm password

    function confirmPassword(){
    const password=document.getElementById('password');
    let passwordValue=password.value;
    const confirmpassword=document.getElementById('confirm-password');
    let confirmpasswordValue=confirmpassword.value;
    let passDiv=document.getElementById('same-pass');
    if(passwordValue != confirmpasswordValue){
        passDiv.style.display="block";
        passDiv.innerText="Enter correct password";
        confirmpassword.style.border="1px solid red";
        confirmpassword.addEventListener('focus',()=>{
            console.log("Hello");
        passDiv.style.display="none";
        confirmpassword.style.border="none";
        })
        }
    }


    // ---------------------------------------------------------------------------------------

// Validation for firstName

function firstNameValidation(){
    const fName=document.getElementById('f-name');
    const fnameValue=fName.value;
    const valid=document.getElementById('f-name-validation');
    let upperCase=/[A-Z]/;
    let firstChar=fnameValue.split('')[0];
    if(fnameValue==0){
        valid.style.display="block";
        valid.innerHTML="Enter your name";
        fName.style.border="1px solid red";
        fName.addEventListener('focus',()=>{
        valid.style.display="none";
        valid.innerHTML="";
        fName.style.border="1px solid black";
        })
    }
        // else{
        //     if(!(upperCase.test(firstChar))){
        //         valid.style.display="block";
        //             valid.innerHTML="First Character Should be in Uppercase"
        //             fName.style.border="1px solid red";
        //             fName.addEventListener('focus',()=>{
        //             valid.style.display="none";
        //             valid.innerHTML="";
        //             fName.style.border="3px solid black";
        //             })
        // }
        // }
}
    // ---------------------------------------------------------------------------------------


// Validation for lastName

function lastNameValidation(){
    const lName=document.getElementById('l-name');
    const lNameValue=lName.value;
    const valid=document.getElementById('l-name-validation');
    let firstChar=lNameValue.split('')[0];
    let upperCase=/[A-Z]/;
    if(lNameValue==0){
        valid.style.display="block";
        valid.innerHTML="Enter your  surname";
        lName.style.border="1px solid red";
        lName.addEventListener('focus',()=>{
        valid.style.display="none";
        valid.innerHTML="";
        lName.style.border="1px solid black";
        })
    }
//     else{
//         if(!(upperCase.test(firstChar))){
//             valid.style.display="block";
//                 valid.innerHTML="First Character Should be in Uppercase"
//                 lName.style.border="1px solid red";
//                 lName.addEventListener('focus',()=>{
//                 valid.style.display="none";
//                 valid.innerHTML="";
//                 lName.style.border="1px solid black";
//                 })
//     }
// }
}

    // ---------------------------------------------------------------------------------------

    // validation for email address

    function emailValidation(){
        const email=document.getElementById('email');
        const emailValue=email.value;
        localStorage.setItem("backgroundColor",`${emailValue}`);
        const emailval=document.getElementById('emailval');
        let regex=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        console.log(regex.test(emailValue));
        if(!(regex.test(emailValue))){
            emailval.style.display="block";
            email.style.border="1px solid red";
            emailval.innerHTML="Enter Valid Email Address";
                email.addEventListener('focus',()=>{
                    emailval.style.display="none";
            email.style.border="none";
            })
        }
    }


    // ---------------------------------------------------------------------------------------
    
    //for search box

    const searchBox=document.getElementById('search-box');
    const searchBoxValue=searchBox.value;
    const searchicon=document.getElementById('search-icon');

    searchBox.addEventListener('input',()=>{
        searchicon.style.display="none";
    });
    searchBox.addEventListener('blur',()=>{
        if(searchBoxValue == " "){
            console.log(searchBoxValue)
            searchicon.style.display="block";
        }
    });
    
    // ---------------------------------------------------------------------------------------

const body=document.getElementById('container');
let col=localStorage.getItem("backgroundColor");
console.log(col);
body.style.backgroundColor=`${col}`
