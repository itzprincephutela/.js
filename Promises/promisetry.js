const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;


function customPromise(executor){
    let state = PENDING   //state keeps track of the promise's state
    let value = null;   //value will store the resolved or rejected value
    let handlers = []   //handlers is an array to store then callbacks.
    let catchers = []   //catchers is an array to store catch callbacks.
    


// If the promise is not PENDING, it returns early.
// Sets the state to FULFILLED and stores the resolved value.
// Calls each then handler with the resolved value.
    function resolve(result){
        if(state !== PENDING) return;
        
        state = FULFILLED
        value = result
        
        handlers.forEach((h)=> h(value));
    }

//    If the promise is not PENDING, it returns early.
// Sets the state to REJECTED and stores the rejection reason.
// Calls each catch handler with the rejection reason.
    
    function reject(err){
        if(state !== PENDING) return;
        
        state = REJECTED
        value = err
        
        catchers.forEach((c)=> c(value))
    }
    // If the state is FULFILLED, it immediately calls the successCallback with the resolved value.
// If the state is still PENDING, it pushes the successCallback into the handlers array to be called later.
    this.then = function(successCallback){
        if(state === FULFILLED){
            successCallback(value)
        }else{
            handlers.push(successCallback)
        }
    }

//     If the state is REJECTED, it immediately calls the failureCallback with the rejection reason.
// If the state is still PENDING, it pushes the failureCallback into the catchers array to be called later.
    
    this.catch = function(failureCallback){
        if(state === REJECTED){
            failureCallback(value)
        }else{
            catchers.push(failureCallback)
        }
        
        
    }
    // The executor function is called immediately with resolve and reject as arguments. This is where the asynchronous work happens and either resolve or reject is called based on the result.
    
    executor(resolve,reject)
}




// This function simulates asynchronous work using setTimeout.
// Since 2 == 2 is always true, it will always call res (resolve) after 1 second with the message 'Promise Resolved hello'.
const doWork = (res,rej) =>{
    if(2 == 2                                                                                                                                                                                                                                          ){
        setTimeout(() => {res('Promise Resolved hello')},1000);
    }else{
        setTimeout(() =>{rej('Promise Rejected Bye')},1000);
    }
}



let greetMsg = new customPromise(doWork)
greetMsg.then((val)=>{
    console.log("then value" , val);
})
greetMsg.catch((err)=>{
    console.log("catch value" , err);
})

// Creates a new customPromise with doWork as the executor.
// Adds a then handler to log the resolved value.
// Adds a catch handler to log the rejection reason.
// Execution Flow
// The customPromise constructor is called with doWork as the executor.
// Inside the customPromise constructor:
// state, value, handlers, and catchers are initialized.
// executor(resolve, reject) is called immediately.
// In the doWork executor:
// Since 2 == 2 is true, setTimeout schedules a call to res('Promise Resolved hello') after 1 second.
// After 1 second, resolve('Promise Resolved hello') is called:
// The state is changed to FULFILLED.
// The value is set to 'Promise Resolved hello'.
// All then handlers are called with the value 'Promise Resolved hello'.
// The then handler logs "then value Promise Resolved hello" to the console.
// Since the promise is resolved, the catch handler is not called.

// **************************************************************//


// console.log("Program Starts");

// setTimeout(() => {
//   console.log("I am Set Time Out");
// }, 1000);

// Promise.resolve().then((val) => {
//   console.log("Promise output");
// });

// console.log("Program Ends");

// Promise fuctions



