// const firstDiv = document.getElementById("first")
// console.log(firstDiv);

// firstDiv.style.backgroundColor = "red";
// firstDiv.style.width = "200px";
// firstDiv.textContent = "Hello";

let str1 = "Hello";
let str2 = str1;
str1 = "Privet";
console.log(str1);
console.log(str2);


//...
const cars = ["Tesla", "Lada", "Audi"];
const copyCars = [...cars];
copyCars[1] = "Opel"
console.log(cars);
console.log(copyCars);

const goroda = ["Berlin", "Paris"];
const goroda1 = ["London", "Budapest"];
const mergeGoroda = [...goroda, ...goroda1];
console.log(mergeGoroda);


const vegetables = ["carrot","tomato","cucumber"];
const newVegetables = ["potato ", ...vegetables, "avocado"];
console.log(newVegetables);

const user = {name:"Igor"};
const userWithEmail = {...user, email: "example@mail.com"};
console.log(userWithEmail);












const fruits = ["apple", "orange","mango"];
const fruits2 = fruits;
fruits[0] = "carrot";
console.log(fruits);
console.log(fruits2);






