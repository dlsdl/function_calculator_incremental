let score = 0;
let num1, num2, correctSum;

function generateNumbers() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    correctSum = num1 + num2;
    // ����������һЩ��������ʾ���������֣�����ĿҪ��ֻ��ʾ��  
    // console.log(`���ɵ�������: ${num1} �� ${num2}`); // ʾ��  
}

function checkAnswer() {
    const userInput = document.getElementById('sumInput').value;
    if (userInput === '' || isNaN(userInput)) {
        alert('������һ����Ч�����֣�');
        return;
    }

    generateNumbers(); // ÿ�ε����������������  

    if (parseInt(userInput) === correctSum) {
        score++;
        document.getElementById('score').textContent = score;
        alert('��ϲ������ˣ�');
    } else {
        alert('����ˣ�������һ�Σ�');
    }
}

// ��ʼ����һ�����֣���ѡ��������Ϸ�������  
generateNumbers();