document.getElementById("add-money-btn").addEventListener("click", function () {
  // console.log();
  // 1- Bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select back") {
    alert("Please select a bank");
    return;
  }
});