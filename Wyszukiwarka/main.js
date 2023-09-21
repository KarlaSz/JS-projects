const search = document.querySelector('.search')
const liList = document.querySelectorAll('li')

const checkEngine = e => {
  const text = e.target.value.toLowerCase()
  // console.log(`zmienna tex ${text}`)

  liList.forEach(el => {
    if (el.textContent.toLowerCase().indexOf(text) !== -1) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
}

search.addEventListener('keyup', checkEngine)
