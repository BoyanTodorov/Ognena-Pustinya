function init() {
    sessionStorage.setItem('data', 'It\'s Alive')
}

function inc() {
    sessionStorage.setItem('data', sessionStorage.getItem('data') + 'e')
}

function print() {
    console.log(sessionStorage.getItem('data'))
}
