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
  const newPrice = parseFloat(price.value) //zmieniamy stringa na number
  const newThings = parseInt(things.value) //ParseInt zwraca liczbe calkowita
  const newDis = parseFloat(discount.value) //ParseFloat zwraca liczbe z ulamkami po przecinku

  const sum = newPrice * newThings - ((newPrice * newDis) / 100) * newThings
  costInfo.style.display = 'block'

  cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', checkBill)
