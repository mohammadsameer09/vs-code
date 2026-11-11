// two type is store data in memeory primitive or non primitive 

// 7 type of primitive 
// 1-string,2-boolean,3-number,4-null,5-undefined,6-bigInt,7-symbol

const score =100
const scoreValue= 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567187263739778n
console.log(typeof bigNumber);

// refernece (non primitive )

// array,object,function

const hero = ["tony","thor","loki"] // this is array
let myObj = {
name: "sameer" ,
age: 22,

} 

const myFunction = function(){
     console.log("hello world");
} 



