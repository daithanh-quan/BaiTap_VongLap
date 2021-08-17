function handleClick() {
  var divELE = ''
  var html = document.getElementById('txtEven')
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      divELE += `<div class="bg-white">Div Chẵn</div>`
    } else {
      divELE += `<div class="bg-dark text-white">Div Lẻ</div>`
    }
  }
  return (html.innerHTML = divELE)
}
document.getElementById('btnMakeELE').onclick = handleClick
