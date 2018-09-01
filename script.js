function add() {
  var a = document.getElementById("addNum1").value,
    b = document.getElementById("addNum2").value,
    e = +a + +b;
  console.log(e), (document.getElementById("addAnswer").innerHTML = e);
}
function sub() {
  var a = document.getElementById("subNum1").value,
    b = document.getElementById("subNum2").value,
    e = +a - +b;
  console.log(e), (document.getElementById("subAnswer").innerHTML = e);
}
