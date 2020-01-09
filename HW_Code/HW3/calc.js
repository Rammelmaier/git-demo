'use strict';

class Calculator {
  add() {
    let x = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] !== Number || arguments[i] !== NaN) {
        throw new Error('Method ADD smth catched');
      }
      x += arguments[i];
    }
    return x;
  }

  multiplay() {
    let y = 1;
    for (let i = 0; i < arguments.length; i++) {
      y *= arguments[i];
    }
    return y;
  }
}

let calc = new Calculator();
console.log(`Summ is ${calc.add(1, '7')}`);
console.log(`Multiplay is ${calc.multiplay(0, 6)}`);
