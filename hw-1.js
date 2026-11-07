
//  1
let a;
a = 10;
alert(a);
a = 20;
alert(a);

//  2
let iPhoneYear = 2007;
alert(iPhoneYear);

//  3
let jsCreator = "Брендан Айк";
alert(jsCreator);

//  4
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

//  5
let result = 2 ** 5;
alert(result);

//  6
a = 9;
b = 2;
alert(a % b);
// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8
let age = prompt("Сколько вам лет?");
alert(age);

//  9
let user = {
  name: "Анна",
  age: 25,
  isAdmin: false
};
alert(user.name);

//  10
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

// Дополнительное задание
let number = Number(prompt("Загадайте любое число"));
let doubled = number * 2;
alert(doubled);
let withTen = doubled + 10;
alert(withTen);
let half = withTen / 2;
alert(half);
let final = half - number;
alert(final);
alert("Ответ равен 5");