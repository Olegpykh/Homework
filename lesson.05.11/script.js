const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];
// Метод Map - возвращает новый массив,
// созданный путем применения функции к каждому элементу исходного массива
//Этот метод не изменяет исходный массив

// Пример 1

const names = brothers.map((element) => element.name);
console.log(names); // ["Frodo Baggins", "Aragorn", "Legolas", "Gimly", "Gandalf"]

// слова element/ brother -это всего лишь имя переменной (может быть любым)

// Пример 2

const ages = brothers.map((brother) => brother.age);
console.log(ages); // [ 45, 46, 110, 150, 200 ]

//Пример 4

// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = brothers.map((brother) => {
  if (brother.height >= 170) {
    return "Высокий";
  }
  return "Маленький";
});
console.log(sizes);

const sizesVer2 = brothers.map((brother) =>
  brother.height >= 170 ? "Visokii" : "Malenkii"
);

console.log(sizesVer2);


brothers.forEach((brother)=>brother.age +=1);

console.log(brothers);


brothers.forEach((brother)=>brother.name = brother.name.toUpperCase())


// с помощью цикла  for

let sum = 0;
for(let i = 0; i<ages.length; i++){
    sum+=ages[i];
}
console.log(sum);

// Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.

 // const sum2 = ages.reduce((acc, current)=>acc+current,0)
// console.log(sum2);
// Вывести общую высоту героев.
// const heig1 = brothers.reduce((acc, current)=>acc+current.height,0)
// console.log(heig1);
// Сделаем цепочку из двух методов (map, reduce)
const totalHeight = brothers
.map((brother)=>brother.height)// получен массив высоты героев
.reduce((akk, height)=>akk+height,0);
console.log(totalHeight);


// Метод split  разделяет строку на массив

  const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
  const namesArr = str.split(", ");// метод сплит принимает разделитель
  console.log(namesArr);// ["Gandalf", "Sauron", "Saruman", "Legolas", "Elrond"]

  // methode Join

  const newString = namesArr.join("|||");
  console.log( typeof   newString);


  // Метод find-  возвращает первое совпадение с заданным условием

const person = brothers.find((brother)=>brother.race === "human");
console.log(person);

const person2 = brothers.find((brother)=>brother.name === "ARAGORN");
console.log(person2)


// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет


// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет

const oldBrothers = brothers.filter((brother)=>brother.age>100);
console.log(oldBrothers);


// 1. Создать переменную, которой в качестве значения будет присвоено случайно целое число от 0 до 10

// const randomNum = Math.round(Math.random()*10)
// console.log(randomNum);

const value = Math.random()

console.log(value)
// выведет случайное число
  


