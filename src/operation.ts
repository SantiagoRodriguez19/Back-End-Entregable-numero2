const operation = async (num1: number, num2: number, operator: string) => {
    let operationsModulo = await import('./operations.js');
    let result = await operationsModulo.operations(num1, num2, operator);
    console.log(result);
    return result;
};

operation(5, 8, 'sumar');
operation(7, 2, 'restar');
operation(9, 2, 'xxxxx');