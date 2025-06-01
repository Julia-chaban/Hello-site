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

let matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
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


