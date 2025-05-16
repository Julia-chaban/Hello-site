let password = 'моеДело';
let inputPassword = prompt('Введите пароль');
if (inputPassword ===password) {
    alert('Пароль введен верно');}
    else {
    alert('Пароль введен неправильно');
    }
let c = 0;
if (c > 0 && c < 10) {
console.log('Верно');}
else  {
    console.log('Неверно');
}
let b = 10;
if (b > 0 && b < 10) {
console.log('Верно');}
else  {
    console.log('Неверно');
}
let v = -3;
if (v > 0 && v < 10) {
console.log('Верно');}
else  {
    console.log('Неверно');
}
let n = 2;
if (n > 0 && n < 10) {
console.log('Верно');}
else  {
    console.log('Неверно');
}

let d = 50;
let e = 120;
if(d < 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let k = '3';
let sum = Number(a) + Number(k);
alert(sum);

let monthNumber = 12;
if(monthNumber > 13) {
    console.log("Ошибка.Номер месяца должен быть от 1 до 12")
}
else {
    switch(monthNumber) {
        case 12:
        case 1:
        case 2:
        console.log("Зима");
        break;
        case 3:
        case 4:
        case 5:
        console.log("Весна");
        break;
        case 6:
        case 7:
        case 8:
        console.log("Лето");
        break;
        case 9:
        case 10:
        case 11:
        console.log("Осень");
        break;
        default:
        console.log("Ошибка.Неправильно указан месяц");

    }
}

let inputValue = prompt("Пожалуйста, введите любое число");
let number = Number(inputValue);
if(isNaN(number)) {
    alert("Вы ввели не число");
}
else{
    if("number % 2=== 0") {
alert("Число четное");
}
else{
    alert("Число нечетное");
}
    }

let clientOs = 0;
if(clientOs === 0) {
    console.log("Установите наше приложение для IOS по ссылке:https://appstore.com/bank-app");
    }
    else if(clientOs === 1 ) {
    console.log("Установите наше приложение для Android по ссылке:https://play.google.com/store/apps/bank-app");
    }
    else {
        console.log("ОшибкаюНеизвестная операционная система");
    }

    let clientOss = 0;
    let deviseYear = 2014;
    if(deviseYear >= 2015) {
        if(clientOss == 0) {
            console.log("Установите облегченную версию приложения для IOS по ссылке:");
        }
        else if(clientOss == 1) {
            console.log("Установите облегченную версию приложения для Android по ссылке:");
        }
        else {
            console.log("Ошибка.Неизвестная операционная система");
        }
     
    }
    else {
        if(clientOss == 0) {
            console.log("Установите облегченную версию приложения для IOS по ссылке:");
        }
            else if(clientOss == 1) {
            console.log("Установите облегченную версию приложения для Android по ссылке:");
        }
         else {
            console.log("Ошибка.Неизвестная операционная система");
        }
        }
    