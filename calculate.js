let score = 0;
let num1, num2, correctSum;

function generateNumbers() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    correctSum = num1 + num2;
    document.getElementById("num1").innerHTML = num1.toFixed(0);
    document.getElementById("num2").innerHTML = num2.toFixed(0);
    // ����������һЩ��������ʾ���������֣�����ĿҪ��ֻ��ʾ��  
    // console.log(`���ɵ�������: ${num1} �� ${num2}`); // ʾ��  
}

function checkAnswer() {
    const userInput = document.getElementById('sumInput').value;
    if (userInput === '' || isNaN(userInput)) {
        alert('������һ����Ч�����֣�');
        return;
    }

    if (parseInt(userInput) === correctSum) {
        score++;
        document.getElementById('score').textContent = score;
        alert('number+1');
        generateNumbers();
    } else {
        alert('ERROR');
    }

    
}

// ��ʼ����һ�����֣���ѡ��������Ϸ�������  
generateNumbers();