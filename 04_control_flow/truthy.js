const userEmail = []

if(userEmail){
    console.log("got user email");
} else{
    console.log("don't have user email")
}

//Falsy values

//  false, 0 , -0 , BigInt - 0n , "", null, undefined , Nan

//truthy values
//true , "0", "false", " ", [], {}, function(){}- this is empty function

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
