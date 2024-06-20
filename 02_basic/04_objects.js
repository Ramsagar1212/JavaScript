//const tinderUser = new Object()  // singleton object hai
const tinderUser = {}     // or this is non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email : "ramsagar.com",
    fullname : {
        userfullname : {
            firstname : "ram",
            lastname :"sagar choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1, obj2,obj4) 

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

const user = [
    {
        id : 1,
        email : "rams"   
    },
    {
        id : 1,
        email : "rams"   
    },
    {
        id : 1,
        email : "rams"   
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));