//1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break; 
    }
}

//2
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i); // 2
    }
}

//3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    const inner = [];
    for (let j = 0; j < 3; j++) {
        inner.push(1);
    }
    arr4.push(inner);
}
console.log(arr4);


//5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5); 



//6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
const filtered = arr6.filter(item => item !== 'a');
console.log(filtered); 

//7
const arr7 = [9, 8, 7, 6, 5];
const guess = prompt('Угадай число');

if (arr7.includes(Number(guess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
//8
const str8 = 'abcdef';
const reversed = str8.split('').reverse().join('');
console.log(reversed); 

//9
const arr9 = [[1, 2, 3], [4, 5, 6]];
const flat = [...arr9[0], ...arr9[1]];
console.log(flat); 

//10
const arr10 = [3, 7, 1, 9, 2]; 
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

//11
function getSquares(numbers) {
    return numbers.map(num => num ** 2);
}
console.log(getSquares([1, 2, 3, 4]));

//12
function getLengths(words) {
    return words.map(word => word.length);
}
console.log(getLengths(['кот', 'собака', 'дом']));

//13
function getNegatives(numbers) {
    return numbers.filter(num => num < 0);
}

console.log(getNegatives([5, -2, 0, -8, 3]));


//14
const randoms = [];
for (let i = 0; i < 10; i++) {
    randoms.push(Math.floor(Math.random() * 11)); 
}
const evens = randoms.filter(num => num % 2 === 0);

console.log(randoms);
console.log(evens);  

//15
const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1); // 1..10
}

const sum = arr15.reduce((acc, num) => acc + num, 0);
const average = sum / arr15.length;

console.log(arr15);
console.log(average); 