const display = document.querySelector('.calculator .display');

document
    .querySelectorAll('.digits button')
    .forEach( digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}