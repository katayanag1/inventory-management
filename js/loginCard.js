import * as components from './components.js'
import { navigate } from './navigate.js'
import { renderTable } from './renderTable.js';

//Создание карточки с таблицей
export default function createLoginCard(containerEl) {
    const cardEl = components.getCardEl();
    cardEl.classList.add('card-storage');

    // Создаем контейнер для заголовка и кнопки
    const headerContainer = document.createElement('div');
    headerContainer.style.display = 'flex';
    headerContainer.style.justifyContent = 'space-between';
    headerContainer.style.alignItems = 'center';
    headerContainer.style.marginBottom = '20px';

    const titleEl = components.getTitleEl('Склад');
    const addButtonEl = components.getButtonEl('Добавить запись');

    addButtonEl.addEventListener('click', function () {
        navigate('');
    });

    headerContainer.append(titleEl, addButtonEl);

    const tableEl = components.getTableEl();

    cardEl.append(headerContainer, tableEl);
    containerEl.append(cardEl);

    renderTable();
}