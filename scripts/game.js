function init() {
    a = 'It\'s Alive'
}

function inc() {
    sessionStorage.setItem('data', a + 'e')
    a = sessionStorage.getItem('data')
}

function print() {
    console.log(a)
}