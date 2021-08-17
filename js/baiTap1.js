//hàm while
// function handleClick() {
//   // even: chẵn, odd :lẻ
//   var even = ''
//   var odd = ''
//   var i = 0
//   var html = document.querySelector('#txtSeeResult')
//   while (i < 100) {
//     if (i % 2 === 0) {
//       even += i + ', '
//     } else {
//       odd += i + ', '
//     }
//     i++
//   }
//   return html.innerHTML = 'Số chẵn: ' + even + '</br>' + 'Số lẽ: ' + odd
// }
// hàm for
function handleClick() {
  // even: chẵn, odd :lẻ
  var even = ''
  var odd = ''
  var html = document.querySelector('#txtSeeResult')
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      even += i + ', '
    } else {
      odd += i + ', '
    }
  }
  return (html.innerHTML = 'Số chẵn: ' + even + '</br>' + 'Số lẽ: ' + odd)
}
document.getElementById('btnSeeResult').onclick = handleClick
