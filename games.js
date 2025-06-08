
function startGame1() {
    let targetNamber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let quees = prompt("Угадай число от 1 до 100.");
       if (quees === null) {
            alert("Игра завершена! Начните играть снова.");
            return;
        }
         quees = Number(quees);
         if (quees === targetNamber) {
            alert("Поздравляю! Ты угадал число.");
            break;
         } else if (quees < targetNamber) {
            alert("Больше! Попробуй еще раз.");
        }
        else {
            alert("Меньше! Попробуй еще раз.");
     }
    }
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

    const task = `${number1} ${operation} ${number2}`;
    return {
        task: task,
        answer: eval(task)
    };
} 
    const {task , answer} = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);
    if (parseFloat(userAnswer) === answer) {
        alert("Верно! Отличная работа!");
    } else {
        alert(`Неправильно.Правильный ответ:${answer}`);
        
    }
   }

   
function flipText() {
let inputText = prompt("Введите текст для переворота:");
let flippedText = inputText.split("").reverse().join("");
alert("Перевернутый текст:\n" + flippedText);
}
    


const quiz = [
           {
               question: "Какой цвет неба?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
    function startQuiz() {
        let score = 0;
        quiz.forEach(q => {
    let question = q.question + "\n\n" + q.options.join("\n") + "\n\nВаш ответ:";
    let userAnswer = prompt(question);
    userAnswer = Number(userAnswer);
            if (userAnswer === q.correctAnswer) {
                score ++;
            }
        });
        alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
    } 
   
    
const choices = ["камень", "ножницы", "бумага"];
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function determineWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return "Ничья!";
    } else if (
        (playerChoice === "камень" && compChoice === "ножницы") ||
        (playerChoice === "ножницы" && compChoice === "бумага") ||
        (playerChoice === "бумага" && compChoice === "камень")
    ) {
        return "Вы победили!";
    } else {
        return "Вы проиграли!";
    }
}


function playGame() {
  let playerChoice = prompt("Ваш ход: выберите камень, ножницы или бумагу");
    if(playerChoice === null) {
        alert("Игра отменена.");
        return;
    }
    playerChoice = playerChoice.trim().toLocaleLowerCase();
    if (!choices.includes(playerChoice)) {
        alert("Недопустимый выбор. Игра остановлена.");
        return;
    }
    let compChoice = computerChoice();
    let result = determineWinner(playerChoice, compChoice);
    alert(`
    Ваш выбор: ${playerChoice}
    Компьютер: ${compChoice}
    Результат: ${result}
    `);
}


function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
}
function changeBlockColor() {
    const block = document.querySelector(".min");
    block.style.backgroundColor = getRandomRgb();
}   
function endGame() {
    const block = document.querySelector(".min");
    block.style.backgroundColor = "";
    alert("Игра завершена! Время истекло.");
}
setTimeout(endGame, 100000);