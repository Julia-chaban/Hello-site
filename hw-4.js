function getMin(a ,  b) {
    return a < b ? a : b;
}
console.log(getMin(3 , 4));
console.log(getMin(6 , 6));

function checkEvenOrOdd(n) {
    if(n % 2 === 0) {
      return "Число четное" ; 
    } else {
    return "Число нечетное";
    }
}
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));

function printSquare(x) {
    const square = x * x;
    console.log(square);
}
printSquare(5);
printSquare(10);


function calculetSquare(y) {
    return  y * y;
}
let result = calculetSquare(7);
console.log(result);

function askAge() {
    let age = prompt("Сколько вам лет?","");
    age = Number(age);
    if(age < 0) {
        alert("Вы ввели неправильное значение.");
} else if(age >= 0 && age <= 12) {
    alert("Привет,друг!");
} else {
    alert("Добро пожаловать.");
}
}
askAge();

function multiplyNumbers(a , b) {
    if(!isFinite(Number(a)) || !isFinite(Number(b))) {
    return "1 или обозначение не является числом";
 } 
    return Number(a) * Number(b);
}
console.log(multiplyNumbers(5 , 6));
console.log(multiplyNumbers("abc", 6));
console.log(multiplyNumbers(5, null));
console.log(multiplyNumbers("10", "2"));

function cubeNumber() {
    let input = prompt("Введите число");
    if(!isFinite(Number(input))) {
    return "Переданный параметр не является числом";
    }
    let n = Number(input);
    let cubet = n ** 3;
    return 'Равняется получившееся значение, где n=${n}. Получившееся зачение:${cubed}';
}
for ( let i = 0; i <= 10; i ++) {
    console.log(cubeNumber());
}

const PI = Math.PI;
let circle1 = {
    radius: 5,
    getArea: function() {
        return this.radius * this.radius * PI;
},
getPerimeter: function() {
        return 2 * PI * this.radius ;
}
    };
let circle2 = {
    radius: 7,
    getArea: function() {
        return this.radius * this.radius * PI;
},
    getPerimeter: function() {
    return 2 * PI * this.radius;
}
    };
    console.log("Площадь круга curcle1.", circle1.getArea());
    console.log("Периметр круга curcle1.", circle1.getPerimeter());
    console.log("Площадь круга curcle2.", circle2.getArea());
    console.log("Периметр круга curcle2.", circle2.getPerimeter());