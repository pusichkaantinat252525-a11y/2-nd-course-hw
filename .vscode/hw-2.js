// Задание 1
let password = 'Пароль';
let userPasword = prompt('Введите пароль');
if (userPasword === password) {
    alert ('Пароль введен правильно');
} else {
    alert ('Пароль введен не верно');
}
// Задание 2
let c = 2;

if (c > 0 && c < 10) {
console.log('Верно');
} else {
    console.log('Не верно');
 } 
//  Задание 3
let d = 143;
let e = 56;
if (d > 100 || e < 100) {
console.log('Верно');
} else {
    console.log('Не верно');
}
// Задание 4
let a = '2';
let b = '3';
alert(+a + +b);
// Задание 5
let monthNumber = 12;
if (monthNumber > 13 || monthNumber < 0) {
    console.log('Такого месяца не существует');
} else {
    switch (monthNumber) {
        case 12:
            case 1:
                case 2:
                    console.log('Зима');
                    break;
        case 3:
            case 4:
                case 5:
                    console.log('Весна');
                    break;
        case 6:
            case 7:
                case 8:
                    console.log('Лето');
                    break;
        case 9:
            case 10:
                case 11:
                    console.log('Осень');
                    break;                        
    }
 
}
// Дополнительное задание
let number = prompt('Пожалуйста, введите любое число');
if (isNaN(+number)) {
    alert ('Это не число');
} else if (+number % 2 === 0 ) {
    alert ('Четное число');
} else {
    alert ('Число нечетное');
}
