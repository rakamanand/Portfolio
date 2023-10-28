
let myButton=document.getElementById("b1");
let text=document.querySelector("h1");
function setusername()
{
    let Name=prompt("Enter Your Name");
    localStorage.setItem("name",Name);
    text.textContent=`The Name you entered, ${Name}`;
}
if(!localStorage.getItem("name"))
{
    setusername();
}
else{
   const getstored=localStorage.getItem("name");
   text.textContent=`Your name is, ${getstored}`;
}
myButton.onclick=()=>{
    setusername();
};