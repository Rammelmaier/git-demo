'use strict';

class Calculator{

    add(){

        let x = 0;
        for (let i = 0; i < arguments.length; i++) {
            x = x + arguments[i]
        }
        return x;

}
    multiplay (){
       
        let y = 1;
        for (let i = 0; i < arguments.length; i++) {
            y = y * arguments[i]
        }
        return y;
}

}

let calc = new Calculator();
console.log(`Summ is ${calc.add(1,4)}`);
console.log(`Multiplay is ${calc.multiplay(3,6)}`);