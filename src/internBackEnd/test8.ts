// 🛡️ Desafio Final: O Normalizador de Transações
// Contexto: Você recebeu uma lista de transações financeiras. Algumas estão com o valor em string (ex: "1500.00"), outras com a moeda errada, e você precisa calcular o valor líquido (subtraindo uma taxa de 5%).

// Requisitos:

// Interface: Crie uma interface Transicao com id (number), valor (number ou string) e categoria (string).

// Normalização: Converta todos os valores para number.

// Cálculo: Crie um novo campo valorLiquido que seja o valor original menos 5%.

// Filtro: Retorne apenas as transações da categoria "investimento".

// Formatação: O resultado final deve ser um array de objetos contendo apenas id e valorLiquido.


interface Transacao {
    id: number;
    valor: number | string;
    categoria: string;
}

const transacoesBrutas: Transacao[] = [
    { id: 1, valor: 1000, categoria: "investimento" },
    { id: 2, valor: "2000", categoria: "contas" },
    { id: 3, valor: "5000.50", categoria: "investimento" },
    { id: 4, valor: 300, categoria: "lazer" },
];

function normalizarInvestimentos(lista: Transacao[]) {
    // DICAS:
    // 1. Use .filter() para pegar apenas "investimento"
    // 2. Use .map() para transformar os dados
    // 3. Para converter string em número, use Number(valor)
    const TAXA = 0.05;
    return lista.filter((e) => e.categoria === 'investimento').map((item) => {
        const valueNumber = Number(item.valor)
        const valorLiquido = valueNumber * TAXA

        return {
            id: item.id,
            valorLiquido: valorLiquido
        }
    })

}

console.log(normalizarInvestimentos(transacoesBrutas));
// Esperado: [ { id: 1, valorLiquido: 950 }, { id: 3, valorLiquido: 4750.475 } ]