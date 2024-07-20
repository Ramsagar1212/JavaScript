//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// there are two type of memory
/*  1. stack(Primitive)  
    2. Heap (Non-Primitive)
*/

let myYoutube  = "ramsagar"
let anotherName = myYoutube
anotherName = "chaudhary"


console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email : "user.com", 
    upi :  "upi@paytm"
}

let userTwo = userOne

userTwo.email = "abac@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);