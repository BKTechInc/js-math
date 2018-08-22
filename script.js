function add() {
    var num1 = document.getElementById('add').selectedIndex;
    var num2 = document.getElementById('add2').selectedIndex;
    var input = document.getElementsByClassName('additionBox');
    var numbr = Number(num1);
    var numbr2 = Number(num2);
    var answer = numbr + numbr2;
    if (input === null) {
        alert('Error: Uncompleted equation');
    } else {
        document.getElementById('addAnswer').innerHTML = answer.value;
    }
};