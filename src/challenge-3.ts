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
  { id: 1, userId: 1, type: "credit", amount: 1000, createdAt: "2025-01-01" },
  { id: 2, userId: 1, type: "debit", amount: 300, createdAt: "2025-01-02" },
  { id: 3, userId: 2, type: "credit", amount: 500, createdAt: "2025-01-03" },
  { id: 4, userId: 2, type: "debit", amount: 800, createdAt: "2025-01-04" },
  { id: 5, userId: 3, type: "credit", amount: -200, createdAt: "2025-01-05" },
  { id: 6, userId: 3, type: "debit", amount: 100, createdAt: "invalid-date" },
  { id: 7, userId: 4, type: "credit", amount: 0, createdAt: "2025-01-06" },
  { id: 8, userId: 1, type: "credit", amount: 200, createdAt: "2025-01-07" }
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

