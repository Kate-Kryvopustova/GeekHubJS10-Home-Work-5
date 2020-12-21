const inputValue = document.getElementById('input');
const outputValue = document.getElementById('output-text');

inputValue.addEventListener('input', (event) => {
  setTimeout(display, 5000)
  function display() {
    outputValue.innerHTML = event.target.value;
  }
})