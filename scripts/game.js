function init() {
    sessionStorage.setItem('data', 0)
}

function inc() {
    sessionStorage.setItem('data', sessionStorage.getItem('data') + 1)
}

function print() {
    return (sessionStorage.getItem('data'))
}
