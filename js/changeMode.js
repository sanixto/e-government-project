class ChangeMode {
    constructor() {
      this.srcSun = 'img/top/sun.jpeg'; 
      this.srcMoon = 'img/top/moon.jpeg';
      
      this.classButNight = 'button-night-mode';
      this.classBodyNight = 'body-night-mode';
      this.classTollbarNight = 'left-toolbar-night-mode';
      this.isHidden = true;
    }

    toChange() {
      const button = document.getElementById('changeMode');
      const toolbar = document.querySelector('.left-toolbar');
      const sun = document.getElementById('sun');
      const moon = document.getElementById('moon');

      button.classList.toggle(this.classButNight); 
      document.body.classList.toggle(this.classBodyNight);  
      toolbar.classList.toggle(this.classTollbarNight);

      sun.hidden = this.isHidden;
      moon.hidden = !this.isHidden;
      this.isHidden =  !this.isHidden;
    } 
}

export default new ChangeMode();
