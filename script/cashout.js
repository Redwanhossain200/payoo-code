document.getElementById("cashout-btn").addEventListener("click", function () {

  // 1- get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Amount");
    return;
  }

  // 2- get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  // 3- get the current balance
  const balaceElement = document.getElementById("balance");
  const balance = balaceElement.innerText;
  console.log(balance);

  // 4- Calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin")
  if (pin === '1234') {
    alert("Cashout Sccessful");
    balaceElement.innerText = newBalance;
  } else {
    alert("Invalid Amount");
    return;
  }
});
// document.getElementById("cashout-btn").addEventListener("click", function () {

//   // 1- get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // 2- get the amount, validate, convert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   // 3- get the current balance
//   const balaceElement = document.getElementById("balance");
//   const balance = balaceElement.innerText;
//   console.log(balance);

//   // 4- Calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   // 5- get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   console.log(pin);
//   if (pin === '1234') {
//     // 5-1 true::show an alert > set balance
//     alert("Cashout Successful");
//     console.log("New Balance:", newBalance);
//     balaceElement.innerText = newBalance;
//   } else {
//     // 5-2 true::show an error alert > return
//     alert("Invalid Pin");
//     return;
//   }
// });