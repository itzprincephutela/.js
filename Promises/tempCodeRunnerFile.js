
console.log("Program Starts");

setTimeout(() => {
  console.log("I am Set Time Out");
}, 1000);

Promise.resolve().then((val) => {
  console.log("Promise output");
});

console.log("Program Ends");