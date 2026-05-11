import { storage } from './localStorage.js';
import { saveToLocalStorage } from './localStorage.js';
import { renderTable } from './renderTable.js';

// Сортировка
export const sortState = {
    sortColumn: null
};


export function sortTable(column) {
    sortState.sortColumn = column;

    storage.inventory.sort((a, b) => {
        let valueA, valueB;

        switch (column) {
            case 'name':
                valueA = a.name.toLowerCase();
                valueB = b.name.toLowerCase();
                break;
            case 'shelf':
                valueA = a.shelf;
                valueB = b.shelf;
                break;
            case 'weight':
                valueA = parseFloat(a.weight);
                valueB = parseFloat(b.weight);
                break;
            case 'date':
                valueA = new Date(a.date);
                valueB = new Date(b.date);
                break;
            default:
                return 0;
        }

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });

    saveToLocalStorage();
    renderTable();
}
