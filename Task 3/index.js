const dragElement = document.querySelectorAll('.draggable-element');
const dragElementInfo = document.querySelectorAll('.draggable-element__info');
const deleteElement = document.querySelectorAll('.draggable-element__delete');
const containerForElements = document.querySelector('.container');


dragElementInfo.forEach((element, index) => element.addEventListener('click', () => {
  deleteElement.forEach((item, indexElement) => {
    if (index === indexElement) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  })
}));

deleteElement.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  })
});

dragElement.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    if (event.which != 1) return;
    element.style.zIndex = 50;
    
    let marginLeft = containerForElements.getBoundingClientRect().left;
    let marginTop = containerForElements.getBoundingClientRect().top;
    let moveX = event.pageX - marginLeft;
    let moveY = event.pageY - marginTop;

    moveAt(moveX, moveY)

    function moveAt(pageX, pageY) {
      let coordsLeft = pageX - element.offsetWidth / 2;
      let coordsTop = pageY - element.offsetHeight / 2;

      if (coordsLeft >= 0 && coordsLeft <= (element.parentNode.offsetWidth - element.offsetWidth)) {
        element.style.left = coordsLeft + 'px';
      }
      if (coordsTop >= 0 && coordsTop <= (element.parentNode.offsetHeight - element.offsetHeight)) {
        element.style.top = coordsTop + 'px';
      }
    }

    function onMouseMove(event) {
      moveAt(event.pageX - marginLeft, event.pageY - marginTop);
    }

    document.addEventListener('mousemove', onMouseMove);

    element.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onMouseMove);
      element.style.zIndex = 10;
    })
  })
})



