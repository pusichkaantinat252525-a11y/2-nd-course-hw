// Задание 1
let  i = 0;
 while (i < 2) {
    console.log('Привет');
    i++;
 }
// Задание 2
i = 1;
while (i <= 5) {
console.log(i);
i++;
}
// Задание 3
i = 7;
 while (i <= 22) {
    console.log(i);
    i++;
 } 
// Задание 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}
// Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
   n = n / 2;
   num++;
} 
console.log(n);
console.log(num);
// Задание 6
let firstFriday = 3;
for (let friday = firstFriday; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-e число. Необходимо подготовить отчет`);
}
  
// Дополнительное задание 
// №1
let k = 100;
let interations = 0;
while (k >= 0) {
    k = k - 7; 
    interations++;
}
console.log(k);
console.log(interations);

// №2
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
for (let i = 0; i < months.length; i++) {
    console.log('${i + 1} - &{months[i]}');
}

// №3
let book = {
    название: 'Кладбище домашних животных',
    автор: 'Стивен Кинг',
    'год издания': 1983,
    жанр: 'хоррор'
};
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// №4
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);