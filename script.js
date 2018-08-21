function add() {
    // Getting the numbers put in by the user
    var num1 = document.getElementById('add').innerHTML;
    var num2 = document.getElementById('add2').innerHTML;
    // Convert input strings into numbers
    var numbr = Number(num1 + num2);
    // Checks to see if any of the boxes are empty, if so display error alert, if not, console.log a message and display answer
    if (numbr === null) {
        alert('Error: Uncompleted equation');
    } else {
        console.log('Adding numbers together....');
        document.getElementById('addAnswer').innerHTML = numbr;
        console.log(numbr);
    }
};
