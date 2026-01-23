type Transaction2 = {
    id: number;
    user: string;
    type: "income" | "expense";
    amount: number;
};

type TransactionReport = {
    validTransactions: Transaction2[];
    totalIncome: number;
    totalExpense: number;
    balance: number;
    totalByUser: Record<string, number>;
};

const mockTransactions: Transaction2[] = [
    { id: 1, user: "João", type: "income", amount: 5000 },
    { id: 2, user: "Maria", type: "expense", amount: 1200 },
    { id: 3, user: "João", type: "expense", amount: 800 },
    { id: 4, user: "Ana", type: "income", amount: 3000 },
    { id: 5, user: "Maria", type: "income", amount: 2500 },
    { id: 6, user: "João", type: "income", amount: 1500 },
    { id: 7, user: "Ana", type: "expense", amount: 600 },
    { id: 8, user: "Maria", type: "expense", amount: 300 },
    { id: 9, user: "João", type: "expense", amount: 400 },
    { id: 10, user: "Ana", type: "income", amount: 1800 },
    // Transações inválidas (valores negativos ou zero)
    { id: 11, user: "Carlos", type: "income", amount: 0 },
    { id: 12, user: "Pedro", type: "expense", amount: -100 },
];



function buildTransactionReport(transactions: Transaction2[]): TransactionReport {
    const totalByUser: Record<string, number> = {}
    const validTransactions: Transaction2[] = []
    let totalIncome = 0
    let totalExpense = 0
    let balence = 0

    for (const transaction of transactions) {
        if (transaction.amount <= 0) {
            continue
        }
        validTransactions.push(transaction)
        if (transaction.type === 'income') {
            totalIncome += transaction.amount
        } else {
            totalExpense += transaction.amount
        }

//         Quando totalByUser[customer] ainda não existe, ele é undefined.
//         undefined + 5000 ou undefined - 800 → NaN.
        const customer = transaction.user
        if (!totalByUser[customer]) {
            totalByUser[customer] = 0
        }
        if (transaction.type === 'expense') {
            totalByUser[customer] -= transaction.amount
        } else {
            totalByUser[customer] += transaction.amount
        }

    }
    return {
        validTransactions,
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense,
        totalByUser
    }
}

console.log(buildTransactionReport(mockTransactions));
