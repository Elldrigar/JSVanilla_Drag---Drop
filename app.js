const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const serialsNetflix = [
  'Stranger Things',
  'The Umbrella Academy',
  'Dom z papieru',
  'Ty',
  'Sex Education',
  'Nasza planeta',
  'Niewiarygodne',
  'Już nie żyjesz',
  'Jak nas widzą',
  'Szkoła dla elity'
];

//STORE LIST ITEMS
const listItems = [];
let dragStartIndex;

createList();

//INSERT LIST ITEMS TO DOM
function createList() {
    [...serialsNetflix]
        .map(a => ({value: a, sort: Math.random() }))
        .sort((a,b) => a.sort -b.sort)
        .map(a => a.value)
        .forEach((serial, index) => {
          console.log(serial);
          const listItem = document.createElement('li');

          listItem.setAttribute('data-index', index);
          listItem.innerHTML = `
          <span class="number">${index + 1}</span>
          <div class="draggable" draggable="true">
           <p class="serial-name">${serial}</p>
           <i class="fas fa-grip-lines"></i>
          </div>
          `;

          listItems.push(listItem);
          draggable_list.appendChild(listItem);
        });

    addEventListeners();
}
function dragStart(){
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragEnter(){
    this.classList.add('over');
}
function dragLeave(){
    this.classList.remove('over');
}
function dragOver(e){
    e.preventDefault();
}
function dragDrop(){
    const dragEndIndex = this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    })
    dragListItems.forEach(item => {
        item.addEventListener('dragover',dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave)
    })


}