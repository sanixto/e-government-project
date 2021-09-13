import contentPage from "./content.js";
import leftToolbarPage from "./leftToolbar.js";
import changeModePage from "./changeMode.js";

const leftToolbarElem = document.querySelector('.left-toolbar');
const buttonChangeMode = document.getElementById('changeMode'); 

document.addEventListener('click', contentPage.onClickCharter);
document.addEventListener('pointermove', leftToolbarPage.toShow);

leftToolbarElem.addEventListener('click', leftToolbarPage.onClickCharter);
buttonChangeMode.addEventListener('click', () => changeModePage.toChange());

