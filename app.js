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
}