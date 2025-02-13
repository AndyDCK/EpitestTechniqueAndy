class Calculator {
    constructor() {
        this.operators = {'+': 1, '-': 1, '*': 2, '/' : 2, '%' : 2, '^': 3};
    }

    evaluate(expression) {
        try {
            const postfix = this.infixToPostfix(expression);
            return this.evaluatePostfix(postfix);
        } catch (error) {
            throw new Error('Erreur de calcul: ' + error.message);
        }
    }

    infixToPostfix(expression) {
        let output = [];
        let stack = [];
        let tokens = expression.match(/\d+|[-+*/%^()]/g);

        if (!tokens) {
            throw new Error('Expression invalide');
        }

        for (let token of tokens) {
            if (!isNaN(token)) {
                output.push(parseInt(token));
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
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return this.multiply(a, b);
            case '/': return this.divide(a, b);
            case '%': return a % b;
            case '^': return this.power(a, b);
            default: throw new Error('Opérateur inconnu');
        }
    }

    multiply(a, b) {
        let result = 0;
        for (let i = 0; i < Math.abs(b); i++) {
            result += Math.abs(a);
        }
        return (a < 0) ^ (b < 0) ? -result : result;
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
        return neg ? -quotient : quotient;
    }
}

module.exports = Calculator;