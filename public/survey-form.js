
// On click function to capture user data
document.querySelector('#submit-button').addEventListener('click', function (event) {
  // Grabs user input
  var nameInput = document.querySelector('#firstName').value.trim()
  var creditRating = document.querySelector('#creditScore').value.trim()
  var monthlyIncome = document.querySelector('#incomeLevel').value.trim()
  var moneyDown = document.querySelector('#downPayment').value.trim()
  var todaysRate = document.querySelector('#interestRate').value.trim()
  // Logs everything to console
  // console.log('Your Name: ' + userData.clientname)
  // console.log('Your Credit Rating: ' + userData.creditgrade)
  // console.log('Your Monthly Income: $' + userData.income)
  // console.log('Down Payment Amount: $ ' + userData.cashdown)

  // Variables to store mortgage calculator equation
  var decimalRate = todaysRate / 100
  var loanTermRate = 30 * decimalRate
  var effectiveRate = loanTermRate + 0.50
  var loanAmount = [monthlyIncome * 129.6] / [effectiveRate]
  var budget = loanAmount + parseInt(moneyDown)
  var monthlyPayment = monthlyIncome * 0.36

  // Console log monthly max payment and total max budget
  console.log('Your max monthly payment is: $' + monthlyPayment + '.')
  console.log('Your max budget is: $' + parseInt(budget) + '.')

  // Displays results in HTML
  var resultsPage = document.querySelector('.jumbotron-special')
  resultsPage.classList.remove('invisible')
  document.querySelector('#first-name').innerText = nameInput
  document.querySelector('#max-budget').innerText = parseInt(budget)
  document.querySelector('#max-monthly').innerText = monthlyPayment

  window.scrollTo(0, document.body.scrollHeight)
  // Holds user data
  var userData = {
    clientname: nameInput,
    creditgrade: creditRating,
    income: monthlyIncome,
    cashdown: moneyDown,
    budget: budget
  }
  // Ajax call
  $.ajax({
    url: '/api/buyers',
    method: 'POST',
    data: userData
  }).then(function (res) {
    console.log(res)
  })
})
