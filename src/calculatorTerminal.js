const readline = require('readline');
const Calculator = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calc = new Calculator();

console.log("Calculatrice JavaScript");
console.log("Entrez une expression pour calculer ou tapez 'exit' pour quitter.");

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log('Au revoir!');
        rl.close();
        return;
    }

    try {
        const result = calc.evaluate(input);
        console.log(`Résultat: ${result}`);
    } catch (error) {
        console.log(`Erreur: ${error.message}`);
    }
});