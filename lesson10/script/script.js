//Конструктор

/*function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}` );
  };
}
User.prototype.exit = function(name) {
  console.log(`Пользователь ${this.name} вышел`);
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

    console.log(ivan);
    console.log(alex);
    alex.exit();
*/
  //Конструкторы новый синтаксис
 /* class MyClass {
    // методы класса
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
*/
/*
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  exit() {
    console.log(`Пользователь ${this.name} вышел`);
  }
}

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
alex.exit();
ivan.exit();
*/
var elem = document.createElement("h2");
elem.textContent = "Привет мир";

var p = document.createElement("p");
p.appendChild(document.createTextNode('Настоящий рыба фиш.'));
var div = document.createElement('div');
div.setAttribute('id', 'new');
div.appendChild(p);
   class Boks {
    constructor(width, height, background){
      this.width = width;
      this.height = height;
      this.background = background;
    }
  
  helping() {
    let div = document.createElement("div");
  div.setAttribute('id', "block");
  }
  
}
let box = new Boks(60,100,'green');
 box.helping(60,100,'green');
 console.log('boks: ', box);

function addElement() {

  // создаем новый элемент div
  // и добавляем в него немного контента

  var newDiv = document.createElement("div");
  newDiv.setAttribute('div',"org_div1" )
      newDiv.innerHTML = "<h1>Привет!</h1>";

  // добавляем только что созданый элемент в дерево DOM

  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}

// addElement();