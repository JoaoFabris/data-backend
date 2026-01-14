// Contexto: Processar lista de transações e gerar relatório de risco.
// Tarefa:
// Criar uma função que recebe um array de transações e retorna:

// Total de transações
// Valor total movimentado
// Transações suspeitas (acima de R$ 10.000)
// Média de valor por transação
// Transação de maior valor

// Exemplo de entrada:
// typescriptconst transacoes = [
//   { id: 1, valor: 1500.00, tipo: 'credito', data: '2025-01-10' },
//   { id: 2, valor: 15000.00, tipo: 'debito', data: '2025-01-10' },
//   { id: 3, valor: 500.00, tipo: 'credito', data: '2025-01-11' },
// ];
// Saída esperada:
// typescript{
//   totalTransacoes: 3,
//   valorTotal: 17000.00,
//   transacoesSuspeitas: [{ id: 2, valor: 15000.00, ... }],
//   mediaValor: 5666.67,
//   maiorTransacao: { id: 2, valor: 15000.00, ... }
// }

const dataTrans: Transactions[] = [
    { id: 1, valor: 1500.00, tipo: 'credito', data: '2025-01-10' },
    { id: 2, valor: 15000.00, tipo: 'debito', data: '2025-01-10' },
    { id: 3, valor: 500.00, tipo: 'credito', data: '2025-01-11' },
    { id: 4, valor: 40000.00, tipo: 'credito', data: '2025-01-18' },
]

type Transactions = {
    id: number;
    valor: number;
    tipo: TypeTrans;
    data: string;
}

type TransactionsResponse = {
    totalTransacoes: number;
    valorTotal: number;
    transacoesSuspeitas: Transactions[];
    mediaValor: number;
    maiorTransacao: Transactions
}

type TypeTrans = "credito" | "debito"

function validDataTransactions(dataTrans: Transactions[]): TransactionsResponse {
    const LIMITE_SUSPEITO = 10000;
    if(dataTrans.length === 0 ) {
        throw new Error("Lista vazia")
    }
    const totalTransacoes = dataTrans.length

    const valorTotal = dataTrans.reduce((acc, t) => acc + t.valor, 0)

    const transacoesSuspeitas = dataTrans.filter(d => d.valor > LIMITE_SUSPEITO)

    const mediaValor = (valorTotal / totalTransacoes)

    const maiorTransacao = dataTrans.reduce((prev, curr) => {
        return (prev.valor > curr.valor) ? prev : curr
    })


    return {
        totalTransacoes,
        valorTotal,
        transacoesSuspeitas,
        mediaValor,
        maiorTransacao
    }
}

const result9 = validDataTransactions(dataTrans)
console.log(result9);
