const submitBtn = document.querySelector('#submit-btn')
const callbackInput = document.querySelector('#callback-input')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(callbackInput.value)
    callbackInput.value = ''
})