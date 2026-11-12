const name =  "sameer"
const bookCout = 54
// console.log(name + bookCout+ " books available");
// console.log(`hello ${name}, you have ${bookCout} books available`);

const gameName = new String("hello-sameer")

// console.log( gameName[7]); 
// console.log( gameName.__proto__); 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('E'));


const newString = gameName.substring(0, 12);
console.log(newString);

const newString2 = gameName.slice(-12, 10);
console.log(newString2);

const newStringOne = "    sameer    ";
console.log(newStringOne.trim());

const url = "https://www.google.com/sameer%20sameer"

console.log(url.replace("%20", "-"));
console.log(url.replace("sameer","hello").replace("%20","-"));

