class Calculator {
    constructor() {
        this.operators = {'+': 1, '-': 1, '*': 2, '/' : 2, '%' : 2, '^': 3};
    }

    evaluate(expression) {
        try {
            // Gérer la division Euclidienne comme une opération spéciale
            expression = expression.replace(/(\d+) div (\d+)/g, (match, a, b) => `${Math.floor(parseFloat(a) / parseFloat(b))}`);
            
            // Gérer la racine carrée comme une opération spéciale
            expression = expression.replace(/sqrt\(([^)]+)\)/g, (match, number) => Math.sqrt(parseFloat(number)));
    
            const postfix = this.infixToPostfix(expression);
            return this.evaluatePostfix(postfix);
        } catch (error) {
            throw new Error('Erreur de calcul: ' + error.message);
        }
    }

    infixToPostfix(expression) {
        let output = [];
        let stack = [];
        let tokens = expression.match(/\d+(\.\d+)?|[-+*/%^()]/g);  // Support pour les nombres à décimales

        if (!tokens) {
            throw new Error('Expression invalide');
        }

        for (let token of tokens) {
            if (!isNaN(token)) {
                output.push(parseFloat(token));
            } else if (token in this.operators) {
                while (stack.length && this.operators[stack[stack.length - 1]] >= this.operators[token]) {
                    output.push(stack.pop());
                }
                stack.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop());
                }
                if (!stack.length) throw new Error('Parenthèses non équilibrées');
                stack.pop();
            }
        }
        while (stack.length) {
            if (stack[stack.length - 1] === '(') throw new Error('Parenthèses non équilibrées');
            output.push(stack.pop());
        }
        return output;
    }

    evaluatePostfix(postfix) {
        let stack = [];
        for (let token of postfix) {
            if (!isNaN(token)) {
                stack.push(token);
            } else {
                let b = stack.pop();
                let a = stack.pop();
                if (token === '/' && b === 0) throw new Error('Division par zéro');
                stack.push(this.applyOperator(token, a, b));
            }
        }
        return stack[0];
    }

    applyOperator(op, a, b) {
        let result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = this.multiply(a, b); break;
            case '/': result = this.divide(a, b); break;
            case '%': result = a % b; break;
            case '^': result = this.power(a, b); break;
            default: throw new Error('Opérateur inconnu');
        }
        return this.round(result);
    }

    multiply(a, b) {
        let result = 0;
        for (let i = 0; i < Math.abs(b); i++) {
            result += Math.abs(a);
        }
        return this.round((a < 0) ^ (b < 0) ? -result : result);
    }

    divide(a, b) {
        let quotient = 0;
        let neg = (a < 0) ^ (b < 0);

        a = Math.abs(a);
        b = Math.abs(b);

        while (a >= b) {
            a -= b;
            quotient++;
        }
        return this.round(neg ? -quotient : quotient);
    }

    power(a, b) {
        return this.round(Math.pow(a, b));
    }

    round(value) {
        return Math.round(value * 100) / 100;
    }
}

module.exports = Calculator;