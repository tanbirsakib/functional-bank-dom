// funtion for input
function getInputValue(input) {
  const inputValue = document.getElementById(input);
  const ammount = parseFloat(inputValue.value);
  inputValue.value = "";
  return ammount;
}
// function for total deposit/withdraw
function totalBalance(total, depositAmmount) {
  const depositTotal = document.getElementById(total);
  const previousDeposit = parseFloat(depositTotal.innerText);
  depositTotal.innerText = depositAmmount + previousDeposit;
}

// function for blance total
function finalBalance(button, depositAmmount) {
  const currentBalance = document.getElementById("balance-total");
  const currentTotalBalance = parseFloat(currentBalance.innerText);
  if (button == "deposit-button") {
    currentBalance.innerText = currentTotalBalance + depositAmmount;
  } else if (button == "withdraw-button") {
    currentBalance.innerText = currentTotalBalance - depositAmmount;
  }
}

// adding event lister to deposit button button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmmount = getInputValue("deposit-input");
    if (depositAmmount > 0) {
      totalBalance("deposit-total", depositAmmount);
      finalBalance("deposit-button", depositAmmount);
    }
  });

// adding event lister to witdhdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //   updating deposit clicking deposit button
    const withdrawAmmount = getInputValue("withdraw-input");
    const currentBalance = document.getElementById("balance-total");
    const currentTotalBalance = parseFloat(currentBalance.innerText);
    if(withdrawAmmount > 0 && withdrawAmmount < currentTotalBalance){
        totalBalance("withdraw-total", withdrawAmmount);
        finalBalance("withdraw-button", withdrawAmmount);
    } else{
        console.log('enter amount with in your balance range');
    }
   
  });
