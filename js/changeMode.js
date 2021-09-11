const button = document.getElementById('changeMode');

class ChangeMode {
    constructor() {
      this.srcSun = 'img/top/sun.jpeg'; 
      this.srcMoon = 'img/top/moon.jpeg';
      this.classButNight = 'button-night-mode';
      this.classBodyNight = 'body-night-mode';
    }

    render() {
        button.classList.toggle(this.classButNight); 
  
        document.body.classList.toggle(this.classBodyNight);  

        if ( button.classList.contains(this.classButNight) ) {
            button.firstElementChild.src = this.srcMoon; 
        } else {
          button.firstElementChild.src = this.srcSun;  
        }
    } 
}

button.addEventListener('click', function() {
  const changeModeStart = new ChangeMode;
  changeModeStart.render();
})