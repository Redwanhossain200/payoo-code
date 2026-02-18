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

// machine value -> set balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id > hide all > Show id 
function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  // console.log(`add-money-${addmoney},cashout-${cashout}`);

  // sobaike hide kore dao 
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");

  // id wala element ta ke show kora
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}