import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let a = 4;
console.log('Begin:' + a);

function test(a){
    a++;
    console.log('In de functie:' + a);
}

test(a);

a++;
console.log('Einde: ' + a);