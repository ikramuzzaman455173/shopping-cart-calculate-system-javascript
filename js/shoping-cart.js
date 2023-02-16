// function get id
function getElementId(getId) {
  let getElement = document.getElementById(getId)
  return getElement
}


//function setElementText()
function setElementText(getId, value) {
  let getElement = getElementId(getId)
  return getElement.innerText = value
}

// function convert text to number
function getElementText(getId) {
  let getElement = getElementId(getId)
  let getElementValue = parseInt(getElement.innerText)
  return getElement.innerText=getElementValue
}


// function mainTotal calculate
function calculateTotal(phoneValue,phoneCaseValue) {
  let getElementPhoneValue = getElementText(phoneValue)
  let getElementPhoneCaseValue = getElementText(phoneCaseValue)
  let subTotal = getElementPhoneValue + getElementPhoneCaseValue
  setElementText('subtotal', subTotal)
  let tax = (subTotal * 0.1).toFixed(2)
  let totalTax = parseFloat(tax)
  setElementText('tax', totalTax)
  let finalTotal = subTotal + totalTax
  setElementText('total',finalTotal)
}


// function update iphone & case

function updatePhoneCase (isIncrease,getId,getSetValue,amount) {
  let getElement = getElementId(getId)
  if (isIncrease) {
    let phonePreviousCount = parseInt(getElement.value)
    let phoneCurrentCount = phonePreviousCount + 1
    getElement.value = phoneCurrentCount
    let phoneCurrentValue = getElement.value * amount
    setElementText(getSetValue,phoneCurrentValue)

  } else if (getElement.value == 0) {
    return getElement.value=0
  } else {
    let phonePreviousCount = parseInt(getElement.value)
    let phoneCurrentCount = phonePreviousCount - 1
    getElement.value = phoneCurrentCount
    let phoneCurrentValue = getElement.value * amount
    setElementText(getSetValue, phoneCurrentValue)
  }
}


// Button btn-plus-phone
getElementId('btn-plus-phone').addEventListener('click', function () {
  updatePhoneCase(true, 'phone-count', 'phone-value', 1219)
  calculateTotal('phone-value','case-value')
})



// Button btn-minus-phone
getElementId('btn-minus-phone').addEventListener('click', function () {
  updatePhoneCase(false, 'phone-count', 'phone-value', 1219)
  calculateTotal('phone-value','case-value')
})



// Button btn-plus-case
getElementId('btn-plus-case').addEventListener('click', function () {
  updatePhoneCase(true, 'case-count', 'case-value', 59)
  calculateTotal('phone-value','case-value')
})


// Button btn-minus-case
getElementId('btn-minus-case').addEventListener('click', function () {
  updatePhoneCase(false, 'case-count', 'case-value', 59)
  calculateTotal('phone-value','case-value')

})



