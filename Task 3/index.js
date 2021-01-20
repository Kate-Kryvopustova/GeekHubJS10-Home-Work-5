const dragElement = document.querySelectorAll('.draggable-element');
const dragElementInfo = document.querySelectorAll('.draggable-element__info');
const deleteElement = document.querySelectorAll('.delete');
const container = document.querySelector('.tagging-wrapper');
let dragItem = {};

dragElementInfo.forEach((element, index) => element.addEventListener('click', () => {

  deleteElement.forEach((item, indexElement) => {
    if (index === indexElement) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  });

  dragElement.forEach((element, indexItem) => {
    if (indexItem === index) {
      element.classList.add('dragElement');
    } else {
      element.classList.remove('dragElement');
    }
  });

}));

deleteElement.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });
});

function createDragItem() {
  const item = dragItem.elem;

  return item;
}

function mouseDown(event) {
  const draggedElement = event.target.closest('.dragElement');

  if (event.which !== 1) return;
  if (!draggedElement) return;

  dragItem.elem = draggedElement;
  dragItem.downX = event.pageX;
  dragItem.downY = event.pageY;
}

function mouseMove(event) {
  if (!dragItem.elem) return;
  if (!dragItem.item) {

    dragItem.item = createDragItem(event);

    let coordsLeft = dragItem.item.getBoundingClientRect().left + pageXOffset;
    let coordsTop = dragItem.item.getBoundingClientRect().top + pageYOffset;

    dragItem.shiftX = dragItem.downX - coordsLeft;
    dragItem.shiftY = dragItem.downY - coordsTop;

    startDrag();
  }

  const rightCoordinates = container.getBoundingClientRect().right - 2;
  const leftCoordinates = container.getBoundingClientRect().left;
  const topCoordinates = container.getBoundingClientRect().top - 14;
  const bottomCoordinates = container.getBoundingClientRect().bottom - 17;
  const buttonDelete = dragItem.elem.querySelector('.delete');

  let coordinatesX = event.pageX - dragItem.shiftX;
  let coordinatesY = event.pageY - dragItem.shiftY;

  coordinatesX = Math.min(coordinatesX, rightCoordinates - dragItem.item.clientWidth);
  coordinatesX = Math.max(coordinatesX, leftCoordinates);

  coordinatesY = Math.min(coordinatesY, bottomCoordinates - dragItem.item.clientHeight);
  coordinatesY = Math.max(coordinatesY, topCoordinates);

  dragItem.item.style.left = coordinatesX + 'px';
  dragItem.item.style.top = coordinatesY + 'px';

  if (parseInt(dragItem.item.style.left) > (rightCoordinates - dragItem.item.clientWidth - buttonDelete.clientWidth)) {
    buttonDelete.classList.add('move-left');
  } else {
    buttonDelete.classList.remove('move-left');
  }

}

function mouseUp() {
  dragItem = {};
}

function startDrag() {
  document.body.appendChild(dragItem.elem);
  dragItem.elem.style.zIndex = 1;
  dragItem.elem.style.position = 'absolute';
}

document.onmousemove = mouseMove;
document.onmouseup = mouseUp;
document.onmousedown = mouseDown;