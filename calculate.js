let score = 0;
let num1, num2, correctSum;

function generateNumbers() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctSum = num1 + num2;
    document.getElementById("num1").innerHTML = num1.toFixed(0);
    document.getElementById("num2").innerHTML = num2.toFixed(0);
}

function checkAnswer() {
    const userInput = document.getElementById('sumInput').value;
    if (userInput === '' || isNaN(userInput)) {
        document.getElementById('noti').innerHTML = "ERROR";
        return;
    }

    if (parseInt(userInput) === correctSum) {
        let gain = num1 + num2;
        score = score + gain;
        document.getElementById('score').innerHTML = score;
        document.getElementById('noti').innerHTML = "+" + gain;
        generateNumbers();
    } else {
        document.getElementById('noti').innerHTML = "ERROR";
    }

    
}

// 初始生成一次数字（可选，根据游戏设计需求）  
generateNumbers();