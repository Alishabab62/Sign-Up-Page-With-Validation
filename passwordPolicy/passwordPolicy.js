const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    passwordLengthFun();
    passwordCase();
})

function passwordLengthFun(){
    const passwordLength=document.getElementById('length');
    const passwordLengthValue=passwordLength.value;
    localStorage.setItem("passwordLength",`${passwordLengthValue}`);
}

function passwordCase(){
    const upperCase=document.getElementById('uppercase');
    localStorage.setItem("upperCase",`${upperCase.checked}`);
    const lowerCase=document.getElementById('lowercase');
    localStorage.setItem("lowercase",`${lowerCase.checked}`);
    const number=document.getElementById('number');
    localStorage.setItem("number",`${number.checked}`);
    console.log(number.checked);
    const special =document.getElementById('Special-Character');
    localStorage.setItem("special",`${special.checked}`);
}
