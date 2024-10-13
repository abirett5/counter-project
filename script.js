const display = document.getElementById('display')
const resetBtn = document.getElementById('reset-btn')

let count = 0

function increment() {
    count += 1
    display.innerHTML = count
}

function decrement() {
    count -= 1
    display.innerHTML = count
}

resetBtn.addEventListener('click', () => {
    count = 0
    display.innerHTML = count
})