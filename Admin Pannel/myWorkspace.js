
const bcBtn=document.getElementById('bc-btn');
bcBtn.addEventListener('click',()=>{
const demo=document.getElementById("text")
localStorage.setItem("backgroundColor" ,`${demo.value}`);
});