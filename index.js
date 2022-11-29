let walletBalance = 5000;

let payAmt = document.getElementById("pay-amt");
let balanceAmt = document.getElementById("balance-amt");
let payButton = document.getElementById("pay-btn");
let feedbackText = document.getElementById("feedback-text");

// set the text content of balanceAmt to be the wallet balance.

function setBalance() {
  balanceAmt.textContent = walletBalance;
}
setBalance();
function makePayment(amt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amt <= walletBalance) {
        resolve("Payment-successfull");
      } else {
        reject("Unsuccessfull-payment");
      }
    }, 2000);
  });
}
payButton.addEventListener("click", function (ele) {
  feedbackText.textContent = "processing...";
  let payAmount = payAmt.value;
  console.log("wb: " + walletBalance);
  console.log("pa: " + payAmount);
  makePayment(payAmount).then(
    (result) => {
      console.log(result);
      feedbackText.textContent = result;
      walletBalance = walletBalance - payAmount;
      setBalance();
    },
    (err) => {
      feedbackText.textContent = err;
      console.log(err);
    }
  );
});
