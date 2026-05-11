import { saveToLocalStorage } from './localStorage.js'
import { renderTable } from './renderTable.js'
import { storage } from './localStorage.js';


// Функция удаления записи
export function deleteItem(id) {
    storage.inventory = storage.inventory.filter(item => item.id !== id);
    saveToLocalStorage();
    renderTable();
}
