const counterButton = document.getElementById('addOneButton');
const label = document.getElementById('counterLabel');
let count = 0;

function addOneMore() {
  count++;
  const word = count == 1 ? 'time' : 'times';
  label.innerText = `clicked ${count} ${word}`;
}

counterButton.addEventListener('click', addOneMore);
