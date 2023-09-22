const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const checkForm = input => {}

sendBtn.addEventListener('click', e => {
  e.preventDefault()

  checkForm(username)
})

clearBtn.addEventListener('click', e => {
  e.preventDefault() //nieprzeladowywuje strony

  const inputs = [username, pass, pass2, email]
  inputs.forEach(el => {
    el.value = ''
  })
  //   username.value = ''
  //   pass.value = ''
  //   pass2.value = ''
  //   email.value = ''
})
