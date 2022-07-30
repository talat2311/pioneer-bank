//login button event handler
const loginBtn = document.getElementById("enter")
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})

//deposit button event handler
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click" , function(){

    const depositNumber = getInputNumber("depositAmount");

    // const depositAmount = document.getElementById("depositAmount").value ;
    // const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;

    // document.getElementById("currentDeposit").innerText = totalDeposit;
    updateSpanText('currentDeposit' , depositNumber);
    updateSpanText('currentBalance' , depositNumber);
    document.getElementById("depositAmount").value = "" ;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;    
})

//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click" , function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}


function updateSpanText( id , depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;    
}
