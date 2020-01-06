sessionStorage.setItem('data', 'It\'s Alive')

a = sessionStorage.getItem('data');
function inc() {
    sessionStorage.setItem('data', 'It\'s Alive' + 11)
    console.log(a)
}
