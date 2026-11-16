// Задание 1
console.log('js'.toUpperCase());

// Задание 2
function filterByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}
console.log(filterByPrefix(['JavaScript', 'Java', 'Python', 'jAvA'], 'java'));
console.log(filterByPrefix(['Яблоко', 'яблоня', 'Груша'], 'ЯБ')); 

// Задание 3
const num = 32.58884;
console.log(Math.floor(num)); // 32 до меньшего
console.log(Math.ceil(num));  // 33 до большего
console.log(Math.round(num)); // 33 до ближайшего
// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32)); // 21
console.log(Math.max(52, 53, 49, 77, 21, 32)); // 77


// Задание 5
function printRandom() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
printRandom(); // например 7

// Задание 6
function createRandomArray(n) {
    const result = [];
    const length = Math.floor(n / 2);

    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1))); 
    }

    return result;
}
console.log(createRandomArray(10)); // массив из 5 чисел от 0 до 10
console.log(createRandomArray(7));  // массив из 3 чисел от 0 до 7

// Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 5));  
console.log(getRandomInRange(20, 30)); 

// Задание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate); 

// Задание 10
function formatRussianDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    const day = date.getDate();
 const month = months[date.getMonth()];
   const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
      const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(formatRussianDate(new Date()));
