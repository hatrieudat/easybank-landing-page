import nav from "./renderNav.js";
import strongPointCards from "./renderStrongPointCards.js";
import articles from "./renderArticles.js";
import createObserver from "./handleObserver.js";

const header = document.getElementsByTagName('header')
const strongPointCardsComponent = document.getElementById("strong-point-cards");
const lastestArticles = document.getElementById("lastest-article");

header[0]?.insertAdjacentHTML('afterbegin', nav);
strongPointCardsComponent.insertAdjacentHTML('beforeend', strongPointCards);
lastestArticles.insertAdjacentHTML('beforeend', articles);

createObserver(strongPointCardsComponent, false)
createObserver(strongPointCardsComponent, true)
createObserver(lastestArticles, false)
createObserver(lastestArticles, true)