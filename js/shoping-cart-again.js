// function all text element convert in number
function getTextElementValueById(elementId) {
  let getElement = document.getElementById(elementId)
  let getElementValue = parseInt(getElement.innerText)
  return getElement.innerText=getElementValue
}


// Funtion all elementIdGet & set new value
function setTextElementValueById(elementId, value) {
  let setElement = document.getElementById(elementId);
  setElement.innerText=value
}

// This Function Use For All Id Get In Javascript  😀
function getElementId(getId) {
  const elementId = document.getElementById(getId)
  return elementId
}

// function update pnones

function updaatePhone(getId,isIncrease,amount,setId) {
  let phoneId = getElementId(getId)
  let phoneCount = parseInt(phoneId.value)
  if (isIncrease) {
    let currentPhoneCount = phoneCount + 1
    phoneId.value = currentPhoneCount
    let currentValue =currentPhoneCount*amount
    setTextElementValueById(setId,currentValue)
  } else if (phoneCount == 0) {
    return phoneId.innerText=0
  }
  else {
    let currentPhoneCount = phoneCount -1
    phoneId.value = currentPhoneCount
    let currentValue = currentPhoneCount * amount
    setTextElementValueById(setId, currentValue)
  }
}

// function calculate total

function calculate(phoneId, caseId) {
  let iphoneValuegetPhone=getTextElementValueById(phoneId)
  let iphoneValuegetCase = getTextElementValueById(caseId)
  let subTotal = iphoneValuegetPhone + iphoneValuegetCase
  setTextElementValueById('subtotal', subTotal)
  let Tax = (subTotal * 0.1).toFixed(2)
  let totalTax = parseFloat(Tax)
  setTextElementValueById('tax', totalTax)
  let finalTotal = subTotal + totalTax
  setTextElementValueById('total',finalTotal)
}

// button btn-plus-phone
getElementId('btn-plus-phone').addEventListener('click', function () {
  updaatePhone('phone-count', true, 1219, 'phone-value')
  calculate('phone-value','case-value')
})

// function btn-minus-phone
getElementId('btn-minus-phone').addEventListener('click', function () {
  updaatePhone('phone-count', false, 1219, 'phone-value')
  calculate('phone-value', 'case-value')

})



//button btn-plus-case
getElementId('btn-plus-case').addEventListener('click', function () {
  updaatePhone('case-count', true, 59, 'case-value')
  calculate('phone-value', 'case-value')

})

//button btn-minus-case
getElementId('btn-minus-case').addEventListener('click', function () {
  updaatePhone('case-count', false, 59, 'case-value')
  calculate('phone-value', 'case-value')

})

