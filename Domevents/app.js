// let btns = document.querySelectorAll("button");

// for (let btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function (){
//     //     console.dir("You Entered");
//     // }
//     // console.dir(btn);


//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName); 
//     btn.addEventListener("dblclick",function(){
//         console.log("HI");
//     })
// }

// function sayHello() {
//     alert("Hello World");
// }
// function sayName(){
//     alert("PRince Kumarr");
// }


let btn = document.querySelector("button");
let p = document.querySelector("p");
let hea = document.querySelector("h1");



btn.addEventListener("click", colorchange);
p.addEventListener("click", colorchange);
hea.addEventListener("click", colorchange);

function colorchange() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

