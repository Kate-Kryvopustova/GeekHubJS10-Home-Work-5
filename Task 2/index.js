console.clear();

const inputValue = document.getElementById('input');
const outputValue = document.getElementById('output-text');

inputValue.addEventListener('input', (event) => {
  setTimeout(display, 300)
  function display() {
    outputValue.innerHTML = event.target.value;
  }
  
  // clearInterval(timerId)
})