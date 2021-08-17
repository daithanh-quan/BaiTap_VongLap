// hàm while
// function handleClick() {
//   var count = 0
//   var i = 0
//   var html = document.getElementById('txtSeenResult')
//   while (i < 1000) {
//     if (i % 3 === 0) count++
//     i++
//   }
//   html.innerHTML = 'số chia hết cho 3 nhỏ hơn 1000 có: ' + count + ' số'
// }

// hàm for

function handleClick() {
  var count = 0
  var html = document.getElementById('txtSeenResult')
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0) count++
  }
  return (html.innerHTML =
    'số chia hết cho 3 nhỏ hơn 1000 có: ' + count + ' số')
}
document.querySelector('#btnSeenResult').addEventListener('click', handleClick)
