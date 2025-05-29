
function startGame1() {
let targetNamber = Math.floor(Math.random() * 100) + 1;
while(true) {
    let quees = prompt("Угадай число от 1 до 100.");
    quees = Number(quees);
    if (quees === targetNamber){
        alert("Поздравляю , ты угадал число.");
        break;
 }
    else if(quees < targetNamber) {
        alert("Больше! Попробуй еще раз.");
}
    else {
        alert("Меньше! Попробуй еще раз.");
    }
}
console.log('Кнопка"Играть" нажата!');
}