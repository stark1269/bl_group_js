/*
Задача 1
Нажатие на кновку "SHOW ME" должно выводить значение с поля ввода (смотрите на элементы в html-разметке)
*/

// ===================================================
// ===================================================

/*
Задача 2
По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами. 
можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
*/

const refs1 = {
swapBtn: document.querySelector('#swapButton'),
leftInput: document.querySelector('#leftSwapInput'),
rightInput: document.querySelector('#rightSwapInput'),
};

function swapInput() {
  const swap = refs1.leftInput.value;
  refs1.leftInput.value = refs1.rightInput.value;
  refs1.rightInput.value = swap;
};

refs1.swapBtn.addEventListener('click', swapInput);

// ===================================================
// ===================================================

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/

const passwordInput = document.querySelector('#passwordInput');
const passwordButton = document.querySelector('#passwordButton');

function hideText() {
passwordButton.textContent === 'Скрыть' ? passwordButton.textContent = 'Раскрыть' : passwordButton.textContent = 'Скрыть';
passwordInput.type === 'text' ? passwordInput.type = 'password' : passwordInput.type = 'text';
};

passwordButton.addEventListener('click', hideText);

// ===================================================
// ===================================================

/*
Задача 4
Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.
*/

const refs2 = {
  box: document.querySelector('#box'),
  decrease: document.querySelector('#decrease'),
  increase: document.querySelector('#increase'),
};

function decreaseBox() {
  const size = refs2.box.offsetWidth;
  refs2.box.style.width = `${size - 10}px`;
  refs2.box.style.height = `${size - 10}px`;
};

function increaseBox() {
  const size = refs2.box.offsetWidth;
  refs2.box.style.width = `${size + 10}px`;
  refs2.box.style.height = `${size + 10}px`;
};

refs2.decrease.addEventListener('click', decreaseBox);
refs2.increase.addEventListener('click', increaseBox);

// ===================================================
// ===================================================

/*
Задача 5
Навесьте слушатель по клику и определите, когда клик происходит
внутри элемента с id "place" и когда клик приходится вне зоны элемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

const place = document.querySelector('#place');

function onClick1(event) {
  if (place.contains(event.target)) {
    console.log('YES!!!');
    return
    } console.log('NO!!!');
  };

  window.addEventListener('click', onClick1);

  // ===================================================
  // ===================================================

  /*
  Задача 6
  По клику на кнопку "Удвоить" увеличить значение
  в каждом элементе списка в 2 раза
  */

  const listItems = document.querySelectorAll('.listItem');
  const btnEl = document.querySelector('#double');

  btnEl.addEventListener('click', () => {
    listItems.forEach((item) => {
      item.textContent = +item.textContent * 2;
    });
  });

  // ===================================================
  // ===================================================

  /*
  Задача 7
  При клике на круг он должен следовать за курсором.
  При повторном клике он становится в начальное положение.
  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
  https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
  */

  const outerCircle = document.querySelector('.outerCircle');

  function onMouseMove(event) {
    const pageY = event.pageY;
    const pageX = event.pageX;
    outerCircle.style.left = `${pageX - 15}px`;
    outerCircle.style.top = `${pageY - 15}px`;
  };

  function onTargetClick() {
    if (outerCircle.style.position === 'static') {
      window.addEventListener('mousemove', onMouseMove);
      outerCircle.style.position = "absolute";
      return
    }
    outerCircle.style.position = 'static';
    window.removeEventListener('mousemove', onMouseMove);
  };

outerCircle.addEventListener('click', onTargetClick);
  
  // ===================================================
  // ===================================================

  /*
  Задача 8
  При клике на каждую из кнопок суммируются значения с data-атрибутов.
  По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
  информацией о том, какая кнопка была нажата сколько раз.
  */

const refs = {
  statList: document.querySelector('.statList'),
  resultButton: document.querySelector('#resultButton'),
  resultSection: document.querySelector('#resultSection'),
};

let total = 0;
const clickTotal = {};

  function onClick(e) {
    if (e.target.nodeName !== 'BUTTON') { return };
    const sum = +e.target.dataset.number;
    total += sum;
    if (clickTotal[e.target.textContent]) {
      clickTotal[e.target.textContent] += 1;
    } else {
      clickTotal[e.target.textContent] = 1;
    };
  };

  function onResultClick() {
    let pEl = document.createElement('p');
    pEl.textContent = `total: ${total}`;
    resultSection.append(pEl);

    const stat = Object.entries(clickTotal).map(el => {
      const docEL = document.createElement("p");
      docEL.textContent = `Кнопка ${el[0]} нажата ${el[1]} раз`;
      return docEL;
    });
    
    refs.resultSection.append(...stat);
  };

refs.statList.addEventListener('click', onClick);
refs.resultButton.addEventListener('click', onResultClick);

// ===================================================
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

const checkboxList = document.querySelector('.checkboxList');
const checkboxInputs = document.querySelectorAll('.checkboxList input');
const deleteButton = document.querySelector('.checkboxForm button');

function checkInput(event) {
  event.preventDefault();

  checkboxInputs.forEach(item => {
    if (item.checked) {
      item.parentNode.remove()
    };
  });
};

deleteButton.addEventListener('click', checkInput);

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/
const people = document.querySelector('.people');
const sortByNameButton = document.querySelector('#sortByNameButton');
const sortByLastNameButton = document.querySelector('#sortByLastNameButton');

const person = Array.from(document.querySelectorAll('.person'));

function onClickSortName() {
  person.sort((a, b) => {
    const nameA = a.textContent.split(" ")[0];
    const nameB = b.textContent.split(" ")[0];
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  });

  person.map((item) => people.append(item));
};

function onClickSortLastName() {
  person.sort((a, b) => {
    const nameA = a.textContent.split(" ")[1];
    const nameB = b.textContent.split(" ")[1];
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  });

  person.map((item) => people.append(item));
};

sortByNameButton.addEventListener('click', onClickSortName);
sortByLastNameButton.addEventListener('click', onClickSortLastName);
// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/
const contactsFilter = document.querySelector('.contactsFilter')
const contact = document.querySelectorAll('.contact')

function onFilterInput(e) {

  contact.forEach((item) => {
    if (item.textContent.toLowerCase().includes(e.target.value.trim().toLowerCase())) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    };
  });
};

contactsFilter.addEventListener('input', onFilterInput);
// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/
const text = document.querySelector('.text');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
const replaceButton = document.querySelector('#replaceButton');

function onReplace(e) {
  if (!from.value || !to.value) {
    alert('Какая то строка пустая:(');
    return
  } else if (text.textContent.includes(from.value)) {
    text.textContent = text.textContent.replaceAll(from.value, to.value);
    return
  } else (!text.textContent.includes(from.value))
  alert('Такого слова не существует!');
};

replaceButton.addEventListener('click', onReplace);
// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
const grid = document.querySelector('.grid');

function MouseOver(e) {
  if (e.target.nodeName !== "LI")
    return
  e.target.classList.add('currentGridIten');
};

function MouseOut(e) {
  if (e.target.nodeName !== "LI")
    return
  e.target.classList.remove('currentGridIten');
};

grid.addEventListener('mouseover', MouseOver);
grid.addEventListener('mouseout', MouseOut);

// ===================================================
// ===================================================