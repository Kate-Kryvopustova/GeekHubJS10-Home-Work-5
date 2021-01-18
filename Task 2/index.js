const inputValue = document.getElementById('input');
const outputValue = document.getElementById('output-text');
let timer = null;

inputValue.addEventListener('input', (event) => {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    outputValue.innerHTML = event.target.value 
  }, 500 );
})