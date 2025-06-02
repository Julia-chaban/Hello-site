
function startGame1() {
    let targetNamber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let quees = prompt("Угадай число от 1 до 100.");
        quees = Number(quees);
        if (quees === targetNamber) {
            alert("Поздравляю , ты угадал число.");
            break;
        }
        else if (quees < targetNamber) {
            alert("Больше! Попробуй еще раз.");
        }
        else {
            alert("Меньше! Попробуй еще раз.");
            play();
        }
}
 play();  
}

function runQuiz() {
const operations = ['+', '-', '*', '/'];
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateTask() {
    const number1 = getRandom(1, 10);
    const number2 = getRandom(1, 10);
    const opIndex = getRandom(0, operations.length - 1);
    const operation = operations[opIndex];
    const task = '${number1} ${operation} ${number2}';
    return {
        task: task,
        answer: eval(task)
    };
} 
    const {task , answer} = generateTask();
    const userAnswer = prompt('Решите задачу: ${task}');
    if (parseFloat(userAnswer) === answer) {
        alert("Верно! Отличная работа!");
    } else {
        alert('Неправильно.Правильный ответ:${answer}');
        play();
    }
    play();
}


