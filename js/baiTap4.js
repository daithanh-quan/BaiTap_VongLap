function handleClick() {
  var sum = 0
  var xNumber = Number(document.querySelector('#xNumber').value)
  var nNumber = Number(document.querySelector('#nNumber').value)
  var html = document.querySelector('#txtSum')
  for (let i = 1; i <= nNumber; i++) {
    sum += Math.pow(xNumber, i)
  }
  return (html.innerHTML = 'Tổng : ' + sum)
}
document.querySelector('.btnSum').addEventListener('click', handleClick)
