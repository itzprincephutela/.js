// object litterals

const mysym = Symbol["istsymbol"]
const jsuser = {
    name : "prince ",
    "fullname" : "prince kumar",
    [mysym]: "hi",
    age :18,
    location:"sirsa"
}
console.log(jsuser.name)
// console.log(jsuser.fullname)
// console.log(jsuser["fullname"])
// console.log(jsuser["location"])
// console.log(jsuser)


jsuser.greeting = function(){
    console.log("hello jsuser");
}
jsuser.greetingt = function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingt());
