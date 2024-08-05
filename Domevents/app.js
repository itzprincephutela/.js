let btns = document.querySelectorAll("button");

for (let btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function (){
    //     console.dir("You Entered");
    // }
    // console.dir(btn);


    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName); 
    btn.addEventListener("dblclick",function(){
        console.log("HI");
    })
}

function sayHello() {
    alert("Hello World");
}
function sayName(){
    alert("PRince Kumarr");
}