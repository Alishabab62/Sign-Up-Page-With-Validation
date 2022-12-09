const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    passwordLengthFun();
    passwordCase();
})

function passwordLengthFun(){
    const passwordLength=document.getElementById('number');
    const passwordLengthValue=passwordLength.value;
    localStorage.setItem("passwordLength",`${passwordLengthValue}`);
}

function passwordCase(){
    const upperCase=document.getElementById('uppercase');
    localStorage.setItem("upperCase",`${upperCase.checked}`);
    console.log(localStorage.getItem("upperCase"));
}
