"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const operation = (num1, num2, operator) => __awaiter(void 0, void 0, void 0, function* () {
    let operationsModulo = yield import('./operations.js');
    let resultado = yield operationsModulo.operations(num1, num2, operator);
    console.log(resultado);
    return resultado;
});
operation(5, 8, 'sumar');
operation(7, 2, 'restar');
operation(9, 2, 'xxxxx');
