const express = require('express');
const bodyParser = require('body-parser');
const Calculator = require('./calculator');

const app = express();
const port = 3000;

const calculator = new Calculator();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
    const expression = req.body.expression;
    console.log("Expression reçu : ", expression);
    try {
        const result = calculator.evaluate(expression);
        console.log("Résultat : ", result);
        res.json({ result });
    } catch {
        console.log("Erreur : ", error.message);
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})