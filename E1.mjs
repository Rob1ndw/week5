import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function persoonlijkeBegroeting(naam) {
    console.log("Hallo, " + naam + "! Welkom!");
  }
  
persoonlijkeBegroeting("Jan");

process.exit()