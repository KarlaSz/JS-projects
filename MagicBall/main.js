const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const ansArray = ['Tak', 'Nie wiem', 'Nie', 'Czas pokaże...', 'Może😁']

const shakeBall = () => {
  img.classList.add('shake-ball')
  setTimeout(checkInput, 1000)
}

const checkInput = () => {
  if (input.value !== '' && input.value.slice(-1) === '?') {
    searchBall()
    error.textContent = ''
  } else if (input.value !== '' && input.value.slice(-1) !== '?') {
    error.textContent = 'Pytanie musi być zakończone "?"'
    answer.textContent = ''
  } else {
    error.textContent = 'Musisz wpisać pytanie!'
    answer.textContent = ''
  }
  img.classList.remove('shake-ball')
}


const searchBall = () => {
  const number = Math.floor(Math.random() * 4)
  answer.innerHTML = `<span>Odpowiedź: </span> ${ansArray[number]}`
}

img.addEventListener('click', shakeBall)
