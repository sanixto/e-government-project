class LeftToolbar {
  toShow(event) {
    const toolbar = document.querySelector('.left-toolbar');
    const targetX = window.event.clientX;
      
    if (targetX < 10 && targetX > 0) {
      toolbar.hidden = false;
    }    
  
    if (targetX > toolbar.getBoundingClientRect().width) {
      toolbar.hidden = true; 
    } 
  }

  onClickCharter(event) {
    const span = event.target.closest('span');
    
    if (!span) return;
    
    const elem = document.getElementById(span.dataset.about);
  
    elem.scrollIntoView(top);
  }
}

export default new LeftToolbar;
