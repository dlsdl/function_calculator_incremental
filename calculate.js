let score = 0;
let num1, num2, correctSum;

function generateNumbers() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    correctSum = num1 + num2;
    // 这里可以添加一些代码来显示这两个数字，但题目要求只显示和  
    // console.log(`生成的数字是: ${num1} 和 ${num2}`); // 示例  
}

function checkAnswer() {
    const userInput = document.getElementById('sumInput').value;
    if (userInput === '' || isNaN(userInput)) {
        alert('请输入一个有效的数字！');
        return;
    }

    generateNumbers(); // 每次点击都重新生成数字  

    if (parseInt(userInput) === correctSum) {
        score++;
        document.getElementById('score').textContent = score;
        alert('恭喜，答对了！');
    } else {
        alert('答错了，请再试一次！');
    }
}

// 初始生成一次数字（可选，根据游戏设计需求）  
generateNumbers();