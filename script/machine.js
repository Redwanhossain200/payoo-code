// console.log("Machine Added");

// machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
// machine -> balance()
function getBalance() {
  const balanceAmount = document.getElementById("balance");
  const balance = balanceAmount.innerText;
  console.log("Current Balance", Number(balance));
  return Number(balance);
}

