function handleClick() {
  var sum = 1
  var xXNumber = parseInt(document.querySelector('#xXNumber').value)
  var html = document.querySelector('.txtSum')
  for (let i = 1; i <= xXNumber; i++) {
    sum = sum * i
  }
  return (html.innerHTML = 'Giai thừa: ' + sum)
}
document.querySelector('#btnSum').onclick = handleClick
