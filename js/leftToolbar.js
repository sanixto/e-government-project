const toolbar = document.querySelector('.left-toolbar');

document.addEventListener('pointermove', function(event) {
    const targetElem = event.target;
    const targetX = targetElem.getBoundingClientRect().left;
    
    if (targetX < 5) {
      toolbar.hidden = false;
    }    
    
    if (targetX > toolbar.getBoundingClientRect().left) {
        if (targetElem.closest('.left-toolbar')) return;
        
        toolbar.hidden = true;
    }   
})

toolbar.addEventListener('click', function(event) {
  const span = event.target.closest('span');
  
  if (!span) return;
  
  const elem = document.getElementById(span.dataset.about);

  elem.scrollIntoView(top);
})