class ChangeMode {
    constructor() {
      this.srcSun = 'img/top/sun.jpeg'; 
      this.srcMoon = 'img/top/moon.jpeg';
      
      this.classButNight = 'button-night-mode';
      this.classBodyNight = 'body-night-mode';
      this.classTollbarNight = 'left-toolbar-night-mode';
    }

    toChange() {
      const button = document.getElementById('changeMode');
      const toolbar = document.querySelector('.left-toolbar');

      button.classList.toggle(this.classButNight); 
  
      document.body.classList.toggle(this.classBodyNight);  

      toolbar.classList.toggle(this.classTollbarNight);

      if ( button.classList.contains(this.classButNight) ) {
        button.firstElementChild.src = this.srcMoon; 
      } else { 
          button.firstElementChild.src = this.srcSun;  
      }
    } 
}

export default new ChangeMode();
