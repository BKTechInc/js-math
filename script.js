function add() {
    var num1 = document.getElementById('addNum1').value;
    var num2 = document.getElementById('addNum2').value;
    var numbr = Number(num1);
    var numbr2 = Number(num2);
    var answer = numbr + numbr2;
    console.log(answer);
    document.getElementById('addAnswer').innerHTML = answer;
}