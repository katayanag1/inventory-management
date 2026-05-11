import { getLoaderEl } from './components.js';

//Отрисовка карточки
export async function navigate(cardName) {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = '';

    const loaderEl = getLoaderEl()
    appEl.append(loaderEl)

    if (cardName === 'login') {
        const loginCard = await import('./loginCard.js')
        loginCard.default(appEl)
        loaderEl.remove()
    } else {
        const homeCard = await import('./homeCard.js')
        homeCard.default(appEl)
        loaderEl.remove()
    }
}