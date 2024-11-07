// Пример 1 - создание объекта

const student = {
  age: 22,
  name: "Сергей",
};

console.log(student.age); //22
console.log(student.name); // Сергей

// Пример 2 - ключ может состоять из двух слов
// Если ключ имеет пробелы - его нужно обернуть в кавычки

const product = {
  title: "IPhone",
  price: 2000,
  "model of iphone": "XR",
};
console.log(product.price);
console.log(product["model of iphone"]);

product.diagonal = 6.5;
product["type of adapter"] = "USB - C";
console.log(product);

// Пример 3
// Если у нас есть переменная и мы хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

const client = {
  firstName: "John",
  wife: "Maria",
};
const key1 = "wife";
//Как достать по переменной из объекта
console.log(client.key1); // undefined
console.log(client[key1]); // Maria

//Пример 4
//Допустим у нас были переменные - и мы хотим создать из них объект

const title = "Titanic";
const capacity = 1500;

const titanic = { title, capacity };
console.log(titanic);

// Пример 5

const name1 = "Avrora";
const cap = 300;
// хочу создать объект из этих переменных,но с другими названиями ключей

const avrora = { title: name1, capacity: cap };
console.log(avrora);

// Пример 6
// Метод внутри объекта

const dog = {
  nick: "Tuzik",
  gav() {
    console.log("Гав!");
  },
};
// Вызов метода
dog.gav();

//ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
// Наследование - это копирование свойств родительского объекта в новый

const bicycle = {
  brand: "Turist",
  price: 3000,
  bell() {
    console.log("Beep");
  },
};
bicycle.bell();

//на основании велосипеда мы сделаем горный велосипед
//указываем прототип с помощью свойства прото(по два подчеркивания с каждой стороны)

const mountineBike = {
  __proto__: bicycle,
  price: 450,
  gears: 7,
};
console.log(mountineBike.price); // 450
console.log(mountineBike.gears); // 7
console.log(mountineBike.brand); // Turist

console.log(mountineBike);

// Создайте объект транспортное средство vehicle с полями:
// - speed со значением 40
// - capacity со значением 4
// - метод drive(){} - метод выводит в консоль фразу "Поехали!"

// Создайте на основе vehicle объект jeep с capacity = 5
// скоростью 60 и numbersOfDoors = 2

// Вызовите метод drive от jeep

const vehicle = {
  speed: 40,
  capacity: 4,
  drive() {
    console.log("Poehali!");
  },
};

const jeep = {
  __proto__: vehicle,
  capacity: 5,
  speed: 60,
  numberOfDoors: 2,
};

jeep.drive();

console.log(jeep);

const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

//  const frodo = brothers[0];
//  console.log(frodo);

const [frodo, aragorn, legolas, gimly, gandalf] = brothers;
console.log(aragorn);

const ageOfFrodo = frodo.age; //Достали по ключу

console.log(ageOfFrodo);

const user = {
  id: 1,
  email: "user@example.com",
  login: "Admin",
};

const { email, id, login } = user;
console.log(email);

// Деструктуризация
const person = { name: "Frank", age: 21 };
console.log(person.age);
const age = person.age;
const name = person.name;
console.log(name, age);

// Другой способ сделать тоже самое

const dog1 = { nick: "Bobby", breed: "corgi" };
const { nick, breed, height = 10, color = "black" } = dog1;
console.log(nick);
console.log(breed);
console.log(height);
console.log(color);
console.log(dog1);

// Обычнвя функция
function sum(a, b) {
  return a + b;
}

console.log(sum(20, 10));

//Стрелочная функция

const sum2 = (a, b) => a + b;

console.log(sum2(2, 3));

const sum31 = (a, b) => a ** b;
console.log(sum31(4, 3));

function sum41(a, b) {
  return a / b;
}

console.log(sum41(88, 11));

// Функции в JS
// FUNCTION DECLARATION
// Декларация функции (объявление)

function sum4(a, b) {
  return a + b;
}
// Вызов функции

let result = sum4(50, 30);
console.log(result);

// Если нет ретерна, что вернет функция? - undefined

function print() {
  console.log("Hello");
}
let result2 = print();
console.log(result2);

// FUNCTION EXPRESSION

const divide = function (a, b) {
  return a / b;
};

//Вызов функции

console.log(divide(10, 2));

//Какая разница между FUNCTION DECLARATION и FUNCTION EXPRESSION?
// В FUNCTION DECLARATION  вызов может находиться до объявления

print2();
function print2() {
  console.log("PRINTTTTTTT-2");
}

function calculate(a, b, operation) {
  return operation(a, b);
}

function subtract(a, b) {
  return a - b;
}

calculate(9, 3, subtract);  //6

console.log(calculate(9,6,sum));

