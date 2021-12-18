'use strict';

class LeftToolbar {
  constructor() {
    this.toolbar = document.querySelector('.left-toolbar');
    this.content = document.querySelector('.content');
    this.header = document.querySelector('.header');
    this.butShow = document.querySelector('.right-arrow-container')
  }

  toShow(event) {
    const btnShow = event.target.closest('.right-arrow-container');

    if (!btnShow) return;

    this.toolbar.style.display = 'flex';
    this.butShow.style.display = 'none';
    this.content.parentElement.style.paddingLeft = this.toolbar.getBoundingClientRect().width + 'px';
  }

  onClick(event) {
    const span = event.target.closest('span');
    const btnHide = event.target.closest('.left-arrow-container');
    
    if (span) {
      const elem = document.getElementById(span.dataset.about);
      elem.scrollIntoView(top); 
    }
    
    if (btnHide) {
        this.toolbar.style.display = 'none';
        this.content.parentElement.style.paddingLeft = 0;
        this.butShow.style.display = 'flex';
    }
  }

  scrollTo(event) {
    const toolbarTop = this.header.getBoundingClientRect().bottom;
    if (toolbarTop > 0) this.toolbar.style.top = toolbarTop + 'px';
    else this.toolbar.style.top = 0;
  }

  render() {
    const html = `
      <div style="flex: 1; display: flex; justify-content: center;"><img src="img/leftToolbar/building.jpeg" id="building"></div>
      <div style="flex: 9; display: flex; flex-direction: row-reverse;">
        <div style="flex:1; display: flex; align-items: center;">
          <div class="left-arrow-container">
            <img src="img/leftToolbar/left-arrow.png" class="arrow">
          </div>
        </div>
      
        <div style="flex:9;">
          <ul><p class="opacity">Навігація по темах</p>
            <li><p><span>Щo таке електронне урядування?</span></p></li>
            <li><p><span>Етапи розвитку електронного урядування</span></p></li>
            <li><p><span>Функції та основні напрямки діяльності</span></p></li>
            <li><p><span>Наслідки впровадження е-урядування</span></p></li>
            <li><p><span>Електронне урядування в Україні</span></p></li>
            <li><p><span>Мета впровадження е-урядування в Україні</span></p></li>
            <li> <p><span>Стратегічні завдання щодо розвитку е-урядування в Україні</span></p></li>
            <li><p><span>Базові принципи впровадження е-урядування в Україні</span></p></li>
            <li><p><span>Найбільші досягнення України у сфері е-урядування</span></p></li>
            <li><p><span>Зарубіжний досвід впровадження е-урядування</span></p></li>
            <li><p><span>Досвід використання інструментів е-демократії в країнах ЄС</span></p></li>
            <li><p><span>Приклад Естонії</span></p></li>
            <li> <p><span>Недоліки e-урядування в Україні та методи їх вирішення</span></p></li>
            <li><p><span>Використані джерела</span></p></li>
          </ul>
        </div>
      </div>  
    `
    this.createToolbar(html);
    this.createButShow();

    this.content.before(this.butShow);
    this.content.before(this.toolbar);
    this.content.parentElement.style.paddingLeft = this.toolbar.getBoundingClientRect().width + 'px';
 
    let count = 1;
    for (const elem of this.toolbar.querySelectorAll('span')) {
      if (elem) 
        elem.dataset.about = 'chapter' + count++; 
    }
  }

  createToolbar(html) {
    this.toolbar = document.createElement('div');
    this.toolbar.className = 'left-toolbar';
    this.toolbar.innerHTML = html;
    this.toolbar.style.top = this.header.getBoundingClientRect().bottom + 'px';
  }

  createButShow() {
    this.butShow = document.createElement('div');
    this.butShow.className = 'right-arrow-container';
    this.butShow.innerHTML = `<img src="img/leftToolbar/right-arrow.png" class="arrow">`;
    this.butShow.style.display = 'none';
  }
}

export default new LeftToolbar();
