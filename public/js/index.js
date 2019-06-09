/* eslint-disable no-undef */
// Get references to page elements
const exampleText = document.querySelector('#example-text')
const exampleDescription = document.querySelector('#example-description')
const submitBtn = document.querySelector('#submit')
const exampleList = document.querySelector('#example-list')

// The API object contains methods for each kind of request we'll make
class API {
  constructor (someDefault = 'defaultVal') {
    this.someDefault = someDefault
  }

  saveExample (example) {
    return fetch('api/examples', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(example)
    })
  }

  getExamples () {
    return fetch('api/examples')
  }

  deleteExample (id) {
    return fetch('api/examples/' + id, {
      method: 'DELETE'
    })
  }
}

// refreshExamples gets new examples from the db and repopulates the list
const refreshExamples = function () {
  let api = new API()

  api.getExamples()
    .then(results => results.json())
    .then(function (data) {
      while (exampleList.firstChild) {
        exampleList.removeChild(exampleList.firstChild)
      }

      for (let example of data) {
        const aElem = document.createElement('a')
        aElem.textContent = example.text
        aElem.setAttribute('href', '/example/' + example.id)

        const liElem = document.createElement('li')
        liElem.classList.add('list-group-item')
        liElem.dataset.id = example.id
        liElem.appendChild(aElem)

        const buttonElem = document.createElement('button')
        buttonElem.classList.add('btn', 'btn-danger', 'float-right', 'delete')
        buttonElem.textContent = 'ｘ'

        liElem.appendChild(buttonElem)

        exampleList.appendChild(liElem)
      }
    })
}

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
const handleFormSubmit = function (event) {
  event.preventDefault()
  let api = new API()

  const example = {
    text: exampleText.value.trim(),
    description: exampleDescription.value.trim()
  }

  if (!(example.text && example.description)) {
    alert('You must enter an example text and description!')
    return
  }

  api.saveExample(example).then(function () {
    refreshExamples()
  })

  exampleText.value = ''
  exampleDescription.value = ''
}

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
const handleDeleteBtnClick = function (event) {
  if (event.target.matches('button.delete')) {
    let api = new API()

    const idToDelete = event.target.parentElement.dataset.id

    api.deleteExample(idToDelete).then(function () {
      refreshExamples()
    })
  }
}

// Add event listeners to the submit and delete buttons
submitBtn.addEventListener('click', handleFormSubmit)
exampleList.addEventListener('click', handleDeleteBtnClick)
/* eslint-enable no-undef */
