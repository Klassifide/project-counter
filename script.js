const counterButton = document.getElementById('incrementButton');
const label = document.getElementById('displayCounter');
let count = 0;

function add1() {
   count++;
   const word = count == 1 ? 'time' : 'times';
   label.innerText = `clicked ${count} ${word}`;
}

counterButton.addEventListener('click', add1);