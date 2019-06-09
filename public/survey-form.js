
// On click function to capture user data
document.querySelector('#submit-button').addEventListener('click', function (event) {
// Grabs user input
  var nameInput = document.querySelector('#firstName').value.trim()
  var creditRating = document.querySelector('#creditScore').value.trim()
  var monthlyIncome = document.querySelector('#incomeLevel').value.trim()
  var moneyDown = document.querySelector('#downPayment').value.trim()

  // Holds user data
  var userData = {
    name: nameInput,
    credit: creditRating,
    income: monthlyIncome,
    cash: moneyDown
  }
  // Logs everything to console
  console.log(userData.name)
  console.log(userData.credit)
  console.log(userData.income)
  console.log(userData.cash)
})

// submitButton.addEventListener("click", getNewContainer);

// function getNewContainer() {

// $('#submit').on('click', function () {
//     console.log("this button works")
//   function validateForm () {
//     var isValid = true
//     // form control to make sure all questions are answered
//     $('.input-reset ba b--black-20 br2 ph2 pv1 w-100').each(function () {
//       if ($(this).val() === '') isValid = false
//     })
//     return isValid
//   }
//   // if form is validated, all questions answered, store userData in variable
//   if (validateForm() === true) {
//     var userData = {
//       name: $('#firstName').val(),
//       creditscore: $('#creditScore').val(),
//       income: $('#incomeLevel').val(),
//       moneyDown: $('#downPayment').val()
//     }
//     console.log(userData)
//     // Enter Code to Post user answers to seed file for modal
//     // Enter code here
//     /// ///////
//   } else {
//     // alert if questions were not answered
//     alert('Please fill out all fields before submitting!')
//   }
//   return false
