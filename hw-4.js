// Задание 1

function getMin(a, b) {
    if (a <= b) {
        return a;
    }
    return b;
}
console.log(getMin(8, 4)); 
console.log(getMin(6, 6)); 
console.log(getMin(3, 10)); 
// Задание 2

function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    }
    return 'Число нечетное';
}
console.log(checkEven(4)); 
console.log(checkEven(7));
console.log(checkEven(0));


// Задание 3
function printSquare(num) {
    console.log(num ** 2);
}
function getSqure(num) {
    return num ** 2;
}
printSquare(4);     
printSquare(10);    

console.log(getSqure(5));   
console.log(getSqure(8) + 2); 
// Пример
let result = getSqure(7);
console.log(result); 
// Задание 4

function correctAge(age) {
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age <= 12) {
        return 'Привет, друг!';
    }
    return 'Добро пожаловать!';
}
alert(correctAge(prompt('Сколько вам лет?')));
console.log(correctAge(-5)); 
console.log(correctAge(0));  
console.log(correctAge(12)); 
console.log(correctAge(13));
console.log(correctAge(25));
// Задание 5

function multiplyNumbers(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }

    return numA * numB;
}
console.log(multiplyNumbers(4, 5));  
console.log(multiplyNumbers('6', 7));  
console.log(multiplyNumbers('abc', 3)); 
console.log(multiplyNumbers(2, null)); 
console.log(null, undefined);  

// Задание 6

function cubeNumber() {
    let num = prompt('Введите число');

    if (isNaN(Number(num))) {
        return 'Переданный параметр не является числом';
    }
    let cube = num ** 3;
    return `${num} в кубе равняется ${cube}`;
}
for (let i = 0; i <= 10; i++) {
    console.log(`${i} в кубе равняется ${i ** 3}`);
}
alert(cubeNumber());

// Задание 7

const circle1 = {
    radius: 5,

    getArea: function () {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};
console.log(circle1.getArea());    
console.log(circle1.getPerimeter());
console.log(circle2.getArea());    
console.log(circle2.getPerimeter());