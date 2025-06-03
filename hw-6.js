
let str = "js";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

function filterByPrefix(strings,prefix) {
const lowerPrefix = prefix.toLowerCase();
return strings.filter(str => str.toLowerCase().startsWith(lowerPrefix));
}
let fruits = ["Apple", "Banana", "Cherry", "Arcicot", "avocado"];
let filteredFruits = filterByPrefix(fruits,"ap");
console.log(filteredFruits);

let number = 32.58884;
let floorResult = Math.floor(number);
console.log(floorResult);
let ceilResult = Math.ceil(number);
console.log(ceilResult);
let roundResult = Math.round(number);
console.log(roundResult);

let numbers = [52, 53, 49, 77, 21, 32];
let minValeo = Math.min(...numbers);
let maxValeo = Math.max(...numbers);
console.log("Минимальное значение", minValeo);
console.log("Максимальное значение", maxValeo);

function randomFromOneToTen() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
randomFromOneToTen();

function createRandomArray(maxNumber) {
    let length = Math.floor(maxNumber / 2);
    let randomArray = [];
    for(let i = 0; i < length; i ++) {
        let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
        randomArray.push(randomNumber);
    }
return randomArray;
}
let result = createRandomArray(10);
console.log(result);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(10, 20);
console.log(randomNumber);

let today = new Date();
console.log(today);

let curretDate = new Date();
curretDate.setDate(curretDate.getDate() + 73);
console.log(curretDate.toLocaleDateString());

function formatRussianDate(date) {
    const months = [
        "января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"
    ];
    const weekdays = [
        "воскресенье"," понедельник","вторник","среда","четверг","пятница","суббота"
    ];
    let day = date.getDate();
    let month = month.getMonth();
    let year = year.getFullYear();
    let weekday = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedDate = `${day} ${months[month]} ${year},${weekdays[weekday]},${hours}:${minutes}:${seconds}`;
    return formattedDate;
}
let now = new Date();
console.log(formatRussianDate(now));