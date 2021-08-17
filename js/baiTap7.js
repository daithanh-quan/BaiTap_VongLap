function isPrime(n) {
  if (n < 2) return false
  for (let j = 2; j < n; j++) {
    if (n % j === 0) return false
  }
  return true
}

function handleClick() {
  var ELE = ''
  var n = parseInt(document.getElementById('nNNumber').value)
  var html = document.querySelector('.txtPrintValue')
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      ELE += i + ', '
    }
  }
  return (html.innerHTML = ELE)
}
document.querySelector('#btnPrintValue').onclick = handleClick
