// Select inputs on the dom
let loanAmount = document.querySelector('#loan-amount');
let interestRate = document.querySelector('#interest-rate');
let loanPeriod = document.querySelector('#loan-period');

// Set event listener for each input field
loanAmount.addEventListener('input', loanCalc);
interestRate.addEventListener('input', loanCalc);
loanPeriod.addEventListener('input', loanCalc);

// Place input value(s) into auto loan calculation
function loanCalc() {
    
    let totalLoan = (((interestRate.value * .01) + 1) * loanAmount.value).toFixed(2),
    monthlyLoan = (((((interestRate.value * .01) + 1) * loanAmount.value)) / loanPeriod.value).toFixed(2);

    let totalOutput = document.querySelector('.output-total__value'),
    monthlyOutput = document.querySelector('.output-monthly__value');

    // console.log(totalLoan);
    // console.log(monthlyLoan);
    // Output calculated value(s), (1) for total cost of car loan and (2) for monthly payments
    if(monthlyLoan == NaN || monthlyLoan == Infinity || monthlyLoan == undefined) {
        monthlyOutput.innerHTML = ``;
    } else {
        totalOutput.innerHTML = `$ ${totalLoan}`;
        monthlyOutput.innerHTML = `$ ${monthlyLoan}`;
    }
}