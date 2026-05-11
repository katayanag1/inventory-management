export const storage = {
    inventory: []
};

//Загрузка данных из LocalStorage
export function loadFromLocalStorage() {
    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory) {
        storage.inventory = JSON.parse(storedInventory);
    } else {
        storage.inventory = [];
        saveToLocalStorage();
    }
}

//Сохранение данных в LocalStorage
export function saveToLocalStorage() {
    localStorage.setItem('inventory', JSON.stringify(storage.inventory));
}