'use strict';
/*
1. Створити функцію, яка може приймати необмежену кількість вхідних значень, та буде повертати кількість рядків, які будуть серед переданих даних. При рішенні використати стрілочні функції.

2. Створити функцію просунутого калькулятора. Функція приймає спочатку знак, а потім необмежену кількість чисел, над якими буде виконана вказана операція.

3. Маючи масив з числами, отримайте найбільше число серед них. При рішенні не користуватися циклами або методами перебору масиву.*/

//1
const numberOfStr = (...strings) => 
  strings.filter((str) => typeof str === 'string').length;

console.log(numberOfStr('abc', 'test', 'asssgfh'));


//2
function calculator(sign, ...nums) {

  switch (sign) {
    case "+":
      return nums.reduce((x1, x2) => x1 + x2);
    case "-":
      return nums.reduce((x1, x2) => x1 - x2);
    case "*":
      return nums.reduce((x1, x2) => x1 * x2);
    case "/":
      return nums.reduce((x1, x2) => x1 / x2);
      
    default: 
      throw new Error(`Символ не розпізнано. 
      Введіть один із перелічених символів '+, -, * , /'`);
  }
}

console.log(calculator("+", 45, 99));
console.log(calculator("-", 1, 82));
console.log(calculator("*", 3, 75));
console.log(calculator("/", 90, 9));
console.log(calculator("g", 45, 99));

//3
const numbers = [4, 7, 91 ,46, 34, 2];
const maxNumber = Math.max(...numbers);
console.log(`Найбільше число з масиву ${numbers} - ${maxNumber}`);