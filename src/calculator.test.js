const Calculator = require('./calculator');

const calc = new Calculator();

test('Addition de 2 + 3', () => {
    expect(calc.evaluate('2 + 3')).toBe(5);
});

test('Soustraction de 5 - 3', () => {
    expect(calc.evaluate('5 - 3')).toBe(2);
});

test('Multiplication de 2 * 3', () => {
    expect(calc.evaluate('2 * 3')).toBe(6);
});

test('Division de 6 / 3', () => {
    expect(calc.evaluate('6 / 3')).toBe(2);
});

test('Modulo de 5 % 3', () => {
    expect(calc.evaluate('5 % 3')).toBe(2);
});

test('Puissance de 2^3', () => {
    expect(calc.evaluate('2 ^ 3')).toBe(8);
});

test('Racine carrée de 9', () => {
    expect(calc.evaluate('sqrt(9)')).toBe(3);
});

test('Division par zéro', () => {
    expect(() => calc.evaluate('5 / 0')).toThrow('Erreur de calcul');
});

test('Division Euclidienne de 5 div 2', () => {
    expect(calc.evaluate('5 div 2')).toBe(2);
});
