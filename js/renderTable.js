import { storage } from './localStorage.js';
import { deleteItem } from './deleteItem.js'


// Отрисовка таблицы
export function renderTable() {
    const tableBody = document.querySelector('#inventory-table tbody');

    if (!tableBody) return;

    tableBody.innerHTML = "";

    storage.inventory.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.shelf}</td>
                <td>${item.weight}</td>
                <td>${item.date}</td>
                <td>
                    <button class="delete-btn" data-id="deleteItem(${item.id})">Удалить</button>
                </td>
            `;

        const deleteBtn = row.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteItem(item.id));

        tableBody.append(row);
    });
}