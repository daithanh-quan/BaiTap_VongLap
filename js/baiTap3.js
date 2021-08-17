function handleClick() {
  var sum = 0
  var html = document.getElementById('txtResult')
  for (var i = 1; i < 10000; i++) {
    sum += i

    if (sum > 10000) break
  }
  return (html.innerHTML = 'Số nguyên dương nhỏ nhất là: ' + i)
}
document.getElementById('btnResult').onclick = handleClick
