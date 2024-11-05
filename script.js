//fundamental code for the starting operations of the counter
const counterButton = document.getElementById('incrementButton');
const label = document.getElementById('displayCounter');
let count = 0;

// function to add 1 to the counter
function add1() {
   count++;
   const word = count == 1 ? 'time' : 'times';
   label.innerText = `Clicked ${count} ${word}`;
}
//event listener for the function upon click
counterButton.addEventListener('click', add1);