"use strict";

// http://www.heise.de/developer/artikel/Features-von-uebermorgen-ES7-Decorators-2633730.html
// https://github.com/wycats/javascript-decorators

function log(target :Object, name :string, descriptor :PropertyDescriptor) {
    console.log(target);     // Greeter {}
    console.log(name);       // greet
    console.log(descriptor); 
    /* 
       Object { 
         value: [Function: greet],
         writable: true,
         enumerable: false,
         configurable: true }
    */
}

class Greeter {

  @log
  greet(x, y) {
    return x + y;
  }
}

var greeter = new Greeter();


