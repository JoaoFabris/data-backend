type transactionType = "credit" | "debit";

type Transaction = {
    id: number;
    userId: number;
    type: transactionType
    amount: number;
    createdAt: string;
};

type UserSummary = {
    userId: number;
    totalCredit: number;
    totalDebit: number;
    balance: number;
};

type TransactionSummary = {
    validTransactions: Transaction[];
    userSummaries: UserSummary[];
    totalVolume: number;
};

const transactions: Transaction[] = [
    { id: 1, userId: 1, type: "credit", amount: 1000, createdAt: "2025-35-45" },
    { id: 2, userId: 1, type: "debit", amount: 300, createdAt: "2025-01-02" },
    { id: 3, userId: 2, type: "credit", amount: 500, createdAt: "2025-01-03" },
    { id: 4, userId: 2, type: "debit", amount: 800, createdAt: "2025-01-04" },
    { id: 5, userId: 3, type: "credit", amount: -200, createdAt: "2025-01-05" },
    { id: 6, userId: 3, type: "debit", amount: 100, createdAt: "invalid-date" },
    { id: 7, userId: 4, type: "credit", amount: 0, createdAt: "2025-01-06" },
    { id: 8, userId: 1, type: "credit", amount: 200, createdAt: "2025-01-07" },
    { id: 9, userId: 1, type: "credit", amount: 200, createdAt: "2025-01-09" },
    { id: 10, userId: 1, type: "credit", amount: 2000, createdAt: "2025-01-01" },
];


// Por usuário:

// totalCredit: soma dos créditos

// totalDebit: soma dos débitos

// balance: totalCredit - totalDebit

// Global:

// totalVolume: soma de amount de todas as transações válidas


// 4. Regras de validação

// Uma transação é válida se:

// amount > 0

// type for "credit" ou "debit"

// createdAt for uma data ISO válida

// userId for maior que 0

// {
//   validTransactions: Transaction[];
//   userSummaries: UserSummary[];
//   totalVolume: number;

function isValidISODate(dateString: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
        return false;
    }

    const date = new Date(dateString); //"2025-01-02", "00:00:00.000Z"
    if (isNaN(date.getTime())) { //Porque getTime() é a forma correta e confiável de verificar se um objeto Date é válido em JavaScript.
        return false;
    }

    //     new Date("2024-01-01").getTime() // 1704067200000
    // new Date("abcd").getTime()      // NaN
    // Ou seja:

    // Data válida → número

    // Data inválida → NaN
    //O JavaScript corrige datas inválidas automaticamente:
    // new Date("2024-02-30") 
    // vira 2024-03-01
    const isoString = date.toISOString().split("T")[0]; // Converte o objeto Date para o formato ISO 8601 padrão, sempre em UTC. "2025-01-02T00:00:00.000Z" 
    // Quando você faz:.split("T")  // { "2025-01-02", "00:00:00.000Z" } Ou seja:Antes do "T" → data Depois do "T" → hora \\  ele pega "2025-01-02"
    return isoString === dateString;
}

function validationRules(transactions: Transaction): boolean {
    if (transactions.amount <= 0) {
        return false
    }
    if (transactions.type !== 'credit' && transactions.type !== 'debit') {
        return false
    }

    if (!isValidISODate(transactions.createdAt)) {
        return false
    }
    if (transactions.userId <= 0) {
        return false
    }

    return true
}

// function userSummaryFunc(transactions: Transaction): numnert {
//     const creditTotal = transactions.amount.reduce((acc, sum) => acc + sum, 0)
//     console.log(creditTotal);

//     return {

//     }
// }


function processTransaction(transactions: Transaction[]) {
    const transactionFilter = transactions.filter(validationRules)


    const totalVolume = transactionFilter.reduce((acc, transactions) => acc + transactions.amount, 0)
    // Usaremos um objeto como "dicionário" onde a chave é o userId
    const userMap: Record<number, UserSummary> = {} //aqui se cria um objeto com userId como key e value como UserSummary para construir a estrtura do retorno

    transactionFilter.forEach(t => { // aqui ele ira criar um user caso ele n exista no dicionário
        if (!userMap[t.userId]) {
            userMap[t.userId] = {
                userId: t.userId,
                totalCredit: 0,
                totalDebit: 0,
                balance: 0
            }
        }
        if (t.type === "credit") {
            userMap[t.userId].totalCredit += t.amount
        } else {
            userMap[t.userId].totalDebit += t.amount
        }

        userMap[t.userId].balance = userMap[t.userId].totalCredit - userMap[t.userId].totalDebit
    })

    const userSummaries = Object.values(userMap) // aqui ele vai pegar apenas os values de cada key dentro desse array //
    //     userSummaries: [
    //     { userId: 1, totalCredit: 2400, totalDebit: 300, balance: 2100 },
    //     { userId: 2, totalCredit: 500, totalDebit: 800, balance: -300 }
    //   ],

    // SE NÃO 

    // userSummaries: {
    //     '1': { userId: 1, totalCredit: 2400, totalDebit: 300, balance: 2100 },
    //     '2': { userId: 2, totalCredit: 500, totalDebit: 800, balance: -300 }
    //   },



    return {
        transactionFilter,
        userSummaries,
        totalVolume
    }
}
const result3 = processTransaction(transactions)
console.log(result3);
