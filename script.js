function add() {
    // Retrieving the text value of the input 
    var num1 = document.getElementById('addNum1').value;
    var num2 = document.getElementById('addNum2').value;
    // Converting the text input to a number
    var numbr = Number(num1);
    var numbr2 = Number(num2);
    // Adding the numbers together
    var answer = numbr + numbr2;
    // Logging answer
    console.log(answer);
    // Displaying answer in answer box
    document.getElementById('addAnswer').innerHTML = answer;
}
function sub() {
    // Retrieving the text value of the input 
    var num1 = document.getElementById('subNum1').value;
    var num2 = document.getElementById('subNum2').value;
    // Converting the text input to a number
    var numbr = Number(num1);
    var numbr2 = Number(num2);
    // Subtract numbers together
    var answer = numbr - numbr2;
    // Logging answer
    console.log(answer);
    // Displaying answer in answer box
    document.getElementById('subAnswer').innerHTML = answer;
}