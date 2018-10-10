
function button(){
  var first = Number(document.getElementById("firstNumber").value);
  var second = Number(document.getElementById("secondNumber").value);
  var total = Number(first / second);
  document.getElementById("total").value = total;
  alert("total : " + total);
}
