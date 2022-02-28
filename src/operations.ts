export const operations = (num1: number, num2: number, operator: string) => {
    return new Promise((resolve) => {
        resolve(
            operator === 'sumar'
                ? num1 + num2
                : operator === 'restar'
                ? num1 - num2
                : 'operador no valido'
        );
    });
};