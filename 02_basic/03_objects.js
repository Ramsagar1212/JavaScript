// singleton
//object.create

// object literals

const mySym = Symbol("key1")
 
const JsUser = {
    name: "ram",
    "full name" : "Ram sagar choudhary",
    [mySym] : "mykey1",
    age :18,
    location: "jaipur",
    email : "ramsagar.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "google.com"
//Object.freeze(JsUser)
JsUser.email = "mircosoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());