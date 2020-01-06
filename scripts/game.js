function init() {
    sessionStorage.setItem('data', 'It\'s Alive')
}

function inc() {
    sessionStorage.setItem('data', a + 'e')
}

function print() {
    console.log(sessionStorage.getItem('data'))
}
