export const operations = (num1, num2, operator) => {
    return new Promise((resolve) => {
        resolve(operator === 'sumar'
            ? num1 + num2
            : operator === 'restar'
                ? num1 - num2
                : 'operador no valido');
    });
};
