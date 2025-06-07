const people = [
    {name :'Глеб', age: 29},
    {name: 'Анна', age: 17},
    {name: 'Олег', age: 7},
    {name: 'Оксана', age: 47}
];
people.sort((a,b) => a.age - b.age);
console.log(people);



function isPositive(value) {
    return value > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(peoples, isMale)); 


const totalTime = 30000; 
const intervalDuration = 3000;
let timerId;
function logCurrentDate() {
    const now = new Date();
    console.log(now.toLocaleString());
}
timerId = setInterval(logCurrentDate, intervalDuration);
setTimeout(() => {
    clearInterval(timerId);
    console.log("30 секунд прошло");
}, totalTime);


function delayForSecond(callback) {
    setTimeout(callback, 1000); 
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
})

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));