const price = document.querySelector('#price')
const things = document.querySelector('#things')
const discount = document.querySelector('#discount')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkBill = () => {
  if (price.value == '' || discount.value == 0) {
    error.textContent = 'Uzupełnij kalkulator'
    // costInfo.style.display = 'none'
  } else {
    error.textContent = ''
    countDiscount()
  }
}

const countDiscount = () => {
  const newPrice = price.value //zmieniamy stringa na number
  const newThings = things.value
  const newDis = discount.value

  const sum = newPrice * newThings - newPrice * newDis * newThings

  costInfo.style.display = 'block'

  cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', checkBill)
