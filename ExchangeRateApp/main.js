const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const currencyTwo = document.querySelector('#currency-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const access_key = '98c12c528f1e0a37e3f1599fe44607e9'

const calculate = () => {
  fetch(
    `http://api.exchangerate.host/live?access_key=98c12c528f1e0a37e3f1599fe44607e9`
  )
    .then(res => res.json())
    .then(data => console.log(data))
}
calculate()
