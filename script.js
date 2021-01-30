document.getElementById("login-area").style.display = "block"
document.getElementById("transaction-area").style.display = "none"

var loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener('click', function () {
    document.getElementById("login-area").style.display = "none"
    document.getElementById("transaction-area").style.display = "block"
})

//Main Account Update function
function withdrawAccount(num){
    var mainAccount = document.getElementById("currentBalance").innerText
    var mainAccountBalance = parseFloat(mainAccount);
    var result = mainAccountBalance - num;
    document.getElementById("currentBalance").innerText = result;
}


function depositAccount(num){
    var currentAccount = document.getElementById("currentBalance").innerText
    var currentNumber = parseFloat(currentAccount);
    var result = currentNumber + num;
    document.getElementById("currentBalance").innerText = result;
}


//Deposit Amount
var depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click", function(){
    var depositAmount = document.getElementById("deposit-input").value;
    var depositNumber = parseFloat(depositAmount)
    var preDepositAmount = document.getElementById("currentDeposit").innerText;
    var preDepositNumber = parseFloat(preDepositAmount)
    preDepositNumber = preDepositNumber + depositNumber;
    document.getElementById("currentDeposit").innerText = preDepositNumber;
    document.getElementById("deposit-input").value = ""
    depositAccount(depositNumber)
})


// withdraw Amount
var withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click", function(){
    var withdrawAmount = document.getElementById("Withdraw-input").value;
    var withdrawNumber = parseFloat(withdrawAmount)
    var preWithdrawAmount = document.getElementById("currentWithdraw").innerText;
    var preWithdrawNumber = parseFloat(preWithdrawAmount);
    preWithdrawNumber = preWithdrawNumber + withdrawNumber;
    document.getElementById("currentWithdraw").innerText = preWithdrawNumber;
    document.getElementById("Withdraw-input").value = ""
    withdrawAccount(withdrawNumber);
})

