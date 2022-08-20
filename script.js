var submitBtn = document.getElementById('submitBtn');
var rating = document.getElementById('rating');
var response = document.getElementById('response');
var rate = document.getElementById('rate');
var radios = document.querySelectorAll('input[type="radio"]')

for(const radio of radios) {
  radio.onclick = (e) => {
    rate.textContent = e.target.value
  }
}

rating.addEventListener('submit', (e) => {
  rating.classList.add('hide')
  response.classList.remove('hide')
  e.preventDefault()
})

