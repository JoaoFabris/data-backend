// 🛠️ O "Xeque-Mate": Desafio de Integração Final
// Este é o último nível. Imagine que a BGC te pede para criar uma função que calcula o valor total de contratos,
//  mas alguns contratos podem estar com o valor faltando (undefined) ou a lista pode estar vazia.

// O desafio: Crie uma função que some todos os valores. Se o valor for undefined, trate-o como 0. Se o resultado final for 0, 
// retorne a string "Nenhum valor processado", caso contrário, retorne o valor total formatado (ex: "Total: R$ 1500").


interface Contrato {
    id: string;
    valor?: number; // Note que é opcional
}

const contratos: Contrato[] = [
    { id: "001", valor: 500 },
    { id: "002" }, // Valor indefinido aqui
    { id: "003", valor: 1000 },
];

function calcularTotal(lista: Contrato[]): string {
    const result = lista.reduce((acc, curr) => {
        return acc + (curr.valor ?? 0) // ?? se for nulo ou undefinded retorna 0, se n retorna curr.valor
    }, 0)
    // 1. Use o .reduce() para somar os valores
    // 2. Lembre-se de tratar o 'undefined' (Dica: valor || 0)
    if(result === 0) {
        return "Nenhum valor processado"
    }
    // 3. Faça a verificação final para retornar a string correta
    
    return `total retornado ${result}`;
}

console.log(calcularTotal(contratos)); // Esperado: "Total: R$ 1500"
console.log(calcularTotal([]));        // Esperado: "Nenhum valor processado"mais 