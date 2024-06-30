function myName(){
    console.log("R");
    console.log("A");
    console.log("M");
}

// myName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    
    return number1 + number2;
}

const result = addTwoNumbers(3,5)   

// console.log("result ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitest"))
// console.log(loginUserMessage()) 


function calculateCarPrice(...num1){    // ... rest or spread operator
    return num1
}

console.log(calculateCarPrice(200,400,500,500,62));

const user = {
    username : "hitest",
    price : 109
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username : "ram ",
    price : 23098
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([982394,234,34,234,234]));