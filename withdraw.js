document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    withdrawField.value = '';
    if (isNaN(newWithDrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWIthDrawTotalString = withdrawTotalElement.innerText;
    const previousWIthDrawTotal = parseFloat(previousWIthDrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const newWithdrawBalanceString = balanceTotalElement.innerText;
    const newWithdrawBalance = parseFloat(newWithdrawBalanceString);

    if (newWithDrawAmount > newWithdrawBalance) {
        alert('amar bank a eto taka nai');
        return;
    }

    const totalWithdrawAmount = newWithDrawAmount + previousWIthDrawTotal;
    withdrawTotalElement.innerText = totalWithdrawAmount;


    const totalBalanceWithdrawAmount = newWithdrawBalance - newWithDrawAmount;
    balanceTotalElement.innerText = totalBalanceWithdrawAmount;

})