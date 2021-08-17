function handleClick() {
  var ELE = '2'
  var n = parseInt(document.getElementById('nNNumber').value)
  var html = document.querySelector('.txtPrintValue')
  for (let i = 3; i < n; i++) {
    if (i % 2 !== 0 && i % Math.sqrt(i) !== 0) {
      ELE += ', ' + i
    }
  }
  return (html.innerHTML = ELE)
}
document.querySelector('#btnPrintValue').onclick = handleClick
