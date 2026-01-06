const todoinput =document.querySelector("#todo");
const btn =  document.querySelector(".btn");
const ul= document.querySelector("#mylist");

btn.addEventListener("click",(e) => {
// e.preventDefault();
const li = document.createElement("li");
const span = document.createElement("span");

//css
span.style.background = "red";
span.style.padding = "0rem 1rem"; 
span.style.marginLeft = "0.5rem";
span.style.cursor = "pointer";

// logic
const todovalue = todoinput.value;
span.innerText = "Delete";
console.log(span);
li.innerText = todovalue;
li.appendChild(span);
ul.appendChild(li);
todoinput.value = "";

span.addEventListener("click",() => {
    ul.removeChild(li);
});
});