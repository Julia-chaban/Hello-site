let a = 10;
alert(a);
a=20;
alert(a);

const firstIphoneYear = 2007;
console.log(firstIphoneYear);

let cretorName = "Брендан Эйч";
alert(cretorName);
console.log(cretorName);

let namber1= 10;
let namber2 = 2;
alert("Сумма" + (namber1 + namber2));
alert("Разность" +(namber1 - namber2));
alert("Произведение" + (namber1 * namber2));
alert("Частное"+ (namber1 / namber2));

let result = 2**5;
alert(result);

let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num ++;
num --;
alert(num);

let age = prompt("Сколько вам лет");
alert(age);

let user = {
    name: "Константин Петрович",
    age:35,
    isAdmin:true
};
alert(JSON.stringify(user));

let userName = prompt("Как ваше имя?");
alert(`Привет ${userName}!`);