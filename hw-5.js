let arr = [1 , 5 , 4, 10, 0, 3];
for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
    if(arr[i] === 10) {
        break;
    }
}
let arrs = [1, 5, 4, 10, 0, 3];
let index = arrs.findIndex(element => element === 4);
console.log(index);

let number = [1, 3, 5, 10, 20];
let joinedString = number.join("");
console.log(joinedString);

let rows = 3;
let cols = 3;
let multiDimArray = [];
for(let i = 0; i < rows; i ++) {
    let row = [];
    for(let j = 0; j < cols; j ++) {
        row.push(1);
    }
    multiDimArray.push(row);
}
console.log(multiDimArray);

    
console.log(matrix);

let array = [1, 1, 1];
array.push(2, 2 ,2);
console.log(array);

let arrays = ["9", "8","7","a","6","5"];
arrays.sort((a , b) => Number(a) - Number(b));
arrays = arrays.filter(el => el !== "a");
console.log(arrays);

let Number = [9, 8, 7, 6, 5];
let userInput = prompt("Угадай число из массива 9, 8, 7, 6, 5");
userInput = Number(userInput);
if (Number.includes(userInput)) {
    alert("Угадал!");
} else {
    alert("Не угадал."); 
}

let str = "a, b, c, d, e, f";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);

let ar = [[1, 2, 3], [4, 5, 6]];
let flatAr = ar.flat();
console.log(flatAr);

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
for (let i = 0; i < nums.length - 1; i ++) {
    let currentSum = nums[i] + nums[i + 1];
    console.log(currentSum);
}

function squares(numbers) {
    return numbers.map(num => num + num);
}
let myArray = [1, 2, 3, 4, 5];
let squaredArray = squares(myArray);
console.log(squaredArray);

function wordLengths(words) {
    return words.map(word => word.length);
}
let words = ["apple","banana","cherry"];
let length = wordLengths(words);
console.log(length);

function negativeValiesOnly(numbers) {
    return numbers.filter(num => num < 0);
}
let myArrays = [-5, 10, -3, 0, 7, -8];
let negatives = negativeValiesOnly(myArray);
console.log(negatives);

let originalArray = [];
for(let i = 0; i < 10, i ++) {
    originalArray.push(Math.floor(Math.random() * 11));
}
let evenNumbers = originalArray.filter(num => num % 2 === 0);
console.log("Исходный массив", originalArray);
console.log("Четные числа", evenNumbers);

let numbers = [];
for(let i = 0; i < 6; i ++) {
    numbers.push(Math.floor(Math.random() * 10) + 1);
}
let sum = numbers.reduce((acc , curr) => acc + curr, 0);
let average = sum / numbers.length;
console.log("Среднее арифметическое",average );
console.log("Исходный массив", numbers);


