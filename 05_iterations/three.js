// for of loop

const arr  = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(`value is ${i}`);
// }


const greeting = "hello world!"
// for (const greet of greeting) {
//     if(greet == " ") continue
//     console.log(`Each char is ${greet}`);            
// }

// Maps

const map = new Map()
map.set("IN","India");
map.set("USA","united states of america")
map.set("fr","france")
map.set("IN","India");

// console.log(map);

for (const [key,value] of map) {
    // console.log(key , ':-',value);
}

const myObject = {
    'game1' : "NFS",
    'game2' : "spiderman"
}

for (const [key,value] of myObject) {
    onsole.log(key , ':-',value);
}