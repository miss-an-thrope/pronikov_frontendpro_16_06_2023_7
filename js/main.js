/*Homework 7*/

//Task №1

let raw1 = [];

for (let i = 10; i <= 20; i++) {
   raw1.push(i);
}

let task1Res = raw1.join(',');

let task1Div = document.querySelector('.resultTask_1');
task1Div.innerHTML = (task1Res);

//Task №2

let raw2 = '';

for (let i = 10; i <= 20; i++) {
   raw2 += `${Math.pow(i, 2)} `;
}
raw2.trim();
console.log(`Task №2
Вивести квадрати чисел від 10 до 20.
Відповідь: ${raw2}`);

//Task №3

console.log("Task №3: Вивести таблицю множення на 7.");
for (let i = 1; i <= 10; i++) {
   console.log(`7 * ${i} = ${i*7}`);
}

//Task №4
let resTask4 = 0;
for (let i = 1; i <= 15; i++) {
   resTask4 += i;
}

console.log(`Task №4
Знайти суму всіх цілих чисел від 1 до 15.
Відповідь: ${resTask4}.`);

//Task №5

let resTask5 = 1;
for (let i = 15; i <= 35; i++) {
   resTask5 *= i;
}

console.log(`Task №5
Знайти добуток усіх цілих чисел від 15 до 35.
Відповідь: ${resTask5.toExponential()}`);

//Task №6

let resTask6 = 0;

for (let i = 1; i <= 500; i++) {
   resTask6 += i;
}

console.log(`Task №6
Знайти середнє арифметичне всіх цілих чисел від 1 до 500: ${resTask6/500}.`);

/* 
   Насправді є інший варіант, який краще вірішує завдання... 
   Сума членів арифметичної прогресії/500:
*/

let findTask6Res = ((500 + 1) * (500 / 2))/500;
console.log(`Насправді є інший варіант, який краще вірішує завдання... 
   Сума членів арифметичної прогресії/500: ((500 + 1) * (500 / 2))/500 = ${findTask6Res}.`);

const giveNumber = (num) => ((num + 1) * (num / 2) / num);
console.log(`Тому ми можемо створити функцію на всі варіанти:
const giveNumber = (num) => ((num + 1) * (num / 2) / num);`);
console.log(giveNumber(500));

//Task №7

let task7Res = 0;

for (let i = 30; i <= 80; i++) {
   if (i % 2 === 0) {
      task7Res += i;
   }
}

console.log(`Task №7
   Вивести суму лише парних чисел у діапазоні від 30 до 80: 
   Відповідь: ${task7Res}.`);

/* Інший варіант:
   Знаходження кількості доданків = n: (end-доданок - start-доданок) / 2 + 1;
   Сума арифметичного ряду: S = (n / 2) * (start-доданок + end-доданок).
*/

const findSum = (start, end) => {
   const findTerms = (end - start) / 2 + 1;
   return console.log((findTerms / 2) * (start + end));
}
console.log("Task №7 Варіант №2 Використання суми арифметичного ряду:");
findSum(30, 80);

//Task №8

let task8Res = '';

for (let i = 100; i <= 200; i++) {
   task8Res += `${i} `
}

console.log(`Task №8
${task8Res.trim()}`);

//Task №9 + №10 + №11

let task9Res = [];
let num9 = Number(prompt(`Task №9
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

Введіть натуральне число (починається з 1):`))
for (let i = 1; i <= num9; i++) {
   if (num9 % i === 0) {
      task9Res.push(i);
   }
}

let result9 = document.querySelector('.resultTask_9');
result9.innerHTML = task9Res;

let task10Res = 0;
let task11Res = 0;
for (let i = 0; i < task9Res.length; i++) {
   if (task9Res[i] % 2 === 0) {
      task10Res += 1;
      task11Res += task9Res[i];
   }
}
console.log(`Task №10
Кількість парних дільників: ${task10Res}.`);
console.log(`Task №11
Сума парних дільників: ${task11Res}.`);

// Task №12

console.log('Task №12')
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i*j}`);
   }
}

