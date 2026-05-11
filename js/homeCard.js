import * as components from './components.js'
import { navigate } from './navigate.js'
import { storage } from './localStorage.js';
import { saveToLocalStorage } from './localStorage.js';


//Создание главной карточки
export default function createHomeCard(containerEl) {
    const cardEl = components.getCardEl();
    cardEl.classList.add('home-card');
    const titleEl = components.getTitleEl('Добавить запись');
    const formEl = components.getFormEl();

    const nameInputEl = components.getInputEl('text', 'name', 'name', 'Название');
    const shelfInputEl = components.getInputEl('text', 'shelf', 'shelf', 'Полка');
    const weightInputEl = components.getInputEl('number', 'weight', 'weight', 'Вес');
    const dateInputEl = components.getInputEl('date', 'date', 'date', 'Время хранения');

    nameInputEl.required = true;
    shelfInputEl.required = true;
    weightInputEl.required = true;
    dateInputEl.required = true;

    const submitButtonEl = components.getButtonEl('Добавить запись');

    submitButtonEl.addEventListener('click', function (e) {
        e.preventDefault()

        if (!formEl.checkValidity()) {
            formEl.reportValidity();
            return;
        }

        const name = document.querySelector('#name').value;
        const shelf = document.querySelector('#shelf').value;
        const weight = document.querySelector('#weight').value;
        const date = document.querySelector('#date').value;


        const newItem = {
            id: Date.now(),
            name,
            shelf,
            weight,
            date,
        };

        storage.inventory.push(newItem);
        saveToLocalStorage();

        formEl.reset();

        navigate('login');
    });

    formEl.append(nameInputEl, shelfInputEl, weightInputEl, dateInputEl);
    cardEl.append(titleEl, formEl, submitButtonEl);
    containerEl.append(cardEl);
}