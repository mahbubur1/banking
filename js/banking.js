function texToNumberConvert(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const numberConvert = parseFloat(inputFieldText);
    inputField.value = '';
    return numberConvert;
}



document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = texToNumberConvert('deposit-input');
    // set deposit amount 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = depositTotalAmount + depositAmount;

    // update total amount 
    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const perviousAmount = parseFloat(totalAmountText);

   totalAmount.innerText  = perviousAmount + depositAmount;
})

// withdraw button active 
 document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawTotalAmount = texToNumberConvert('withdraw-input');
   
    // set  withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const perviousTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = perviousTotal + withdrawTotalAmount;

    // update balance after withdraw 
    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const amountTotal = parseFloat(totalAmountText);
    totalAmount.innerText = amountTotal - withdrawTotalAmount;

})