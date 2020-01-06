function init() {
    sessionStorage.setItem('data', 0)
}

function inc() {
    sessionStorage.setItem('data', sessionStorage.getItem('data') + 1)
}

function print() {
    console.log(sessionStorage.getItem('data'))
}
