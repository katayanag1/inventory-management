import { sortTable } from './sortTable.js';

//Получение элемента карточки
function getCardEl() {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    return cardEl;
}

//Получение элемента заголовка
function getTitleEl(text) {
    const titleEl = document.createElement('h1');
    titleEl.textContent = text;
    titleEl.classList.add('main-title');
    return titleEl;
}
//Получение элемента таблицы
function getTableEl() {
    const tableEl = document.createElement('table');
    tableEl.id = 'inventory-table';
    const theadEl = document.createElement('thead');
    const trEl = document.createElement('tr');
    const headersEl = ['Название', 'Полка', 'Вес', 'Время хранения', '  '];

    const sortColumns = ['name', 'shelf', 'weight', 'date', null];

    headersEl.forEach((headerText, index) => {
        const thEl = document.createElement('th');
        thEl.textContent = headerText;

        if (sortColumns[index] !== null) {
            thEl.style.cursor = 'pointer';
            thEl.classList.add('sortable');
            thEl.addEventListener('click', () => {
                sortTable(sortColumns[index]);
            })
        }

        trEl.append(thEl);
    })

    theadEl.append(trEl);
    tableEl.append(theadEl);

    const tbodyEl = document.createElement('tbody');
    tableEl.append(tbodyEl);

    return tableEl;
}

//Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = text;
    buttonEl.classList.add('btn');
    return buttonEl;
}

//Получение элемента формы
function getFormEl() {
    const formEl = document.createElement('form');
    formEl.classList.add('form');
    return formEl;
}

//Получение элемента текстового поля
function getInputEl(type, name, id, placeholder) {
    const inputEl = document.createElement('input');
    inputEl.type = type;
    inputEl.name = name;
    inputEl.placeholder = placeholder;
    inputEl.id = id;
    inputEl.classList.add('text-field');
    return inputEl;
}

//Получение элемента ссылки 
function getLinkEl(text, href = "") {
    const linkEl = document.createElement('a');
    linkEl.textContent = text;
    linkEl.href = href;
    linkEl.classList.add('link');
    return linkEl;
}

//Получение элемента лоадер
function getLoaderEl() {
    const loaderEl = document.createElement('div');
    loaderEl.classList.add('loader');

    for (let i = 1; i <= 3; i++) {
        const divEl = document.createElement('div');
        loaderEl.append(divEl)
    }

    return loaderEl
}

export {
    getCardEl,
    getTitleEl,
    getTableEl,
    getButtonEl,
    getFormEl,
    getInputEl,
    getLinkEl,
    getLoaderEl
}