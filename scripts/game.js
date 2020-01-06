sessionStorage.setItem('data', 'It\'s Alive')

let a = sessionStorage.getItem('data')
function inc() {
    sessionStorage.setItem('data', 'It\'s Alive' + "eee ...")
    let a = sessionStorage.getItem('data')
    console.log(a)
}
