import contentPage from "./content.js";
import leftToolbarPage from "./leftToolbar.js";
import changeModePage from "./changeMode.js";

leftToolbarPage.render();

const leftToolbarElem = document.querySelector('.left-toolbar');
const buttonChangeMode = document.getElementById('changeMode'); 

document.addEventListener('click', contentPage.onClickCharter);
document.addEventListener('click', (event) => leftToolbarPage.toShow(event));
window.addEventListener('scroll', () => leftToolbarPage.scrollTo());

leftToolbarElem.addEventListener('click', (event) => leftToolbarPage.onClick(event));
buttonChangeMode.addEventListener('click', () => changeModePage.toChange());
