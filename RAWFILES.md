# Raw Files

The Raw Files For This Project. Note that these files are not minified.

**These Files Are Not Usually Well Maintained and Updated**

## `index.html`

``` html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta content="width=device-width,initial-scale=1" name="viewport">
	<title>JS Math</title>
	<link href="https://cdn.glitch.com/c16530b3-dd93-4a57-936e-b6d47ae27437%2Fmath.jpg?1534817525181" rel="icon">
	<link href="https://fonts.googleapis.com/css?family=Corben:700|Roboto" rel="stylesheet">
	<link href="./style.css" rel="stylesheet">
</head>
<body>
	<h1>JS Math</h1>
	<p id="about">JS Math is a site where developers have worked on JavaScript algorithms to create and solve basic and complex problems. We have taken a simple idea of a calculator to extreme, with easier functionality and more code. Presented by <strong>BK Tech Inc</strong>. Created and Developed by <strong>RocketBear27</strong>.<br>
	<br></p>
	<h2>Table Of Contents</h2><a class="toc" href="#add-sec">Addition</a><br>
	<br>
	<a class="toc" href="#sub-sec">Subtraction</a><br>
	<br>
	<hr>
	<br>
	<br>
	<h3 id="add-sec">Addition</h3><br>
	<br>
	<form>
		<input class="additionBox" id="addNum1" placeholder="Number" type="text"> + <input class="additionBox" id="addNum2" placeholder="Number" type="text"> &nbsp;&nbsp;&nbsp; <button class="addCalculate" onclick="add()">Add Numbers</button><br>
		<span class="answerBox"><strong>Your Answer is:</strong></span>
	</form>
	<p id="addAnswer"><span class="answerBox"></span></p><br>
	<br>
	<hr>
	<br>
	<br>
	<h3 id="sub-sec">Subtraction</h3><br>
	<br>
	<form>
		<input class="additionBox" id="subNum1" placeholder="Number" type="text"> - <input class="additionBox" id="subNum2" placeholder="Number" type="text"> &nbsp;&nbsp;&nbsp; <button class="subCalculate" onclick="sub()">Subtract Numbers</button><br>
		<span class="answerBox"><strong>Your Answer is:</strong></span>
	</form>
	<p id="subAnswer"><span class="answerBox"></span></p><br>
	<br>
	<hr>
	<script src="./script.js">
	</script>
</body>
</html>
```
## `style.css`
``` css
body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background-color: white;
}

h1 {
    font-family: 'Corben', cursive;
    font-size: 100px;
}

button {
    outline: none;
    background-color: #ff5151;
    padding: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    -moz-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    transition: all 0.3s;
    border: 0;
    border-radius: 2px;
    cursor: pointer;
}

a {
    color: #00adfd;
    text-decoration: none;
}

a:visited {
    color: #00adfd;
    text-decoration: none;
}

input {
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

#about {
    padding: 10px;
    width: 550px;
    margin: 80px auto 30px;
}
```


## `script.js`

``` js
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
```