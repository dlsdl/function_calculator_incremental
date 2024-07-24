let score = 0;
let num1, num2, correctSum;

function generateNumbers() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    correctSum = num1 + num2;
    document.getElementById("num1").innerHTML = num1.toFixed(0);
    document.getElementById("num2").innerHTML = num2.toFixed(0);
}

function checkAnswer() {
    const userInput = document.getElementById('sumInput').value;
    if (userInput === '' || isNaN(userInput)) {
        document.getElementById('noti').textContent = "这不是有效的数字";
        return;
    }

    if (parseInt(userInput) === correctSum) {
        let gain = num1 + num2;
        score = score + gain;
        document.getElementById('score').textContent = score;
        document.getElementById('noti').textContent = "数字+" + gain;
        generateNumbers();
    } else {
        document.getElementById('noti').textContent = "ERROR";
    }

    
}

// 初始生成一次数字（可选，根据游戏设计需求）  
generateNumbers();