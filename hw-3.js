for(let i = 0; i < 2; i++ ) {
    console.log("привет");
}
for(let i = 1; i <= 5;i ++) {
    console.log(i);
}
for(let i = 7; i <= 22; i ++) {
    console.log(i);
}

let obj = {
    Коля:'200',
    Вася:'300',
    Петя:'400'
};
for (let key in obj) {
    console.log('$(key):зарплата:${obj[key]}:долларов');
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num ++;
}
console.log(n);
console.log(num);

let firstFriday = 7;
let daysOfMonth = Array.from({length: 31},(_,index) => index + 1);
for (let day of daysOfMonth) {
    if ((day - firstFriday ) % 7 === 0) {
        console.log('Сегодня пятница,${day}- число.Необходимо подготовить отчет.');
    }
}
let k = 100;
let interationCount = 0;
while (k >= 0) {
    k -= 7;
    interationCount ++;
    console.log("Последний результат.", k);
    console.log("Количество итераций.", interationCount);
}

let months = [
    "Январь","Февраль","Март",
    "Апрель","Май","Июнь","Июль",
    "Август","Сентябрь","Октябрь",
    "Ноябрь","Декабрь"];
for (let i = 0; i < months.length; i ++) {
    console.log((i + 1) +"." + months[1]);

}
let book = {
    title:"Война и мир",
    author:"Лев Толстой",
    year:1869,
    genre:"Роман-эпопея"
};
console.log("Название книги", book.title);
console.log("Автор",book.author);
console.log("Год издания", book.year);
console.log("Жанр", book.genre);

let randomArray = [];
for (let i = 0; i < 10; i ++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
}
let minNum = Math.min(...randomArray);
console.log("Минимальное число в массиве", minNum);
console.log("Сгенерированный массив", randomArray);