
const bcBtn=document.getElementById('bc-btn');
bcBtn.addEventListener('click',()=>{
    const interface=document.getElementById('interface-container');
const backgroundColor=document.getElementById('background-color').value;


    interface.style.backgroundColor=`${backgroundColor}`;
    console.log("Hello")
})