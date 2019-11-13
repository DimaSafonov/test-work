'use strict'

class DomElement {
  constructor(selector, height, width, background, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;
  
  this.selecElement = () => {
    let newElement ;
    if(selector[0] == '.'){
      newElement = document.createElement('div');
      newElement.setAttribute('class', 'block');
      newElement.style.cssText = `width: 50px;
      height: 60px;
      background: yellow ;
      font-size: 16px;
      `;
      document.body.appendChild(newElement);
          
    } else if(selector[0] == '#') {
      newElement = document.createElement('p');
      newElement.style.cssText = `width: 50px;
      height: 60px;
      background: red ;
      font-size: 60px;
      border-radius: 50%;
      `
      newElement.textContent = `достала лобуда`;
      newElement.setAttribute('id', 'best');
      newElement.style.fontSize = `font-size: ${this.fontSize}`;
      newElement.style.color = 'grey'
      document.body.appendChild(newElement);
    }
  }
  
}
}
let rectangle = new DomElement('.block', '100px', '50px', 'blue', '14px');
 rectangle.selecElement();
 let messenger = new DomElement('#best', '26px');
 messenger.selecElement();
