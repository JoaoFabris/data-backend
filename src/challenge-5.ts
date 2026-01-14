type PaymentMethod = "pix" | "credit_card" | "boleto";

type Payment = {
    id: number;
    userId: number;
    method: PaymentMethod;
    amount: number;
    paidAt: string;
    confirmed: boolean;
};

type UserPaymentSummary = {
    userId: number;
    totalPaid: number;
    paymentsCount: number;
};

type PaymentReport = {
    validPayments: Payment[];
    totalAmount: number;
    userSummaries: UserPaymentSummary[];
};

const payments: Payment[] = [
    { id: 1, userId: 1, method: "pix", amount: 150, paidAt: "2025-01-01", confirmed: true },
    { id: 2, userId: 1, method: "credit_card", amount: 200, paidAt: "2025-01-02", confirmed: true },
    { id: 3, userId: 2, method: "boleto", amount: 300, paidAt: "invalid-date", confirmed: true },
    { id: 4, userId: 2, method: "pix", amount: -50, paidAt: "2025-01-03", confirmed: true },
    { id: 5, userId: 3, method: "credit_card", amount: 500, paidAt: "2025-01-04", confirmed: false },
    { id: 6, userId: 3, method: "pix", amount: 100, paidAt: "2025-01-05", confirmed: true },
    { id: 7, userId: 4, method: "pix", amount: 0, paidAt: "2025-01-06", confirmed: true },
    { id: 8, userId: 4, method: "boleto", amount: 250, paidAt: "2025-13-01", confirmed: true },
    { id: 9, userId: 5, method: "credit_card", amount: 400, paidAt: "2025-01-07", confirmed: true },
];



// Regras

// userId > 0

// method válido

// amount > 0

// paidAt ISO válido

// confirmed === true

// Tarefa

// Criar:

// function processPayments(payments: Payment[]): PaymentReport

function validateDateISO(dateToString: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(dateToString)) {
        return false
    }
    const date = new Date(dateToString);
    if (isNaN(date.getTime())) {
        return false
    }

    const isoToString = date.toISOString().split("T")[0]
    return isoToString === dateToString


}


function validRulesPayment(payments: Payment): boolean {
    if (payments.userId <= 0) {
        return false
    }
    if (payments.amount <= 0) {
        return false
    }
    if (!payments.method) {
        return false
    }
    if (!payments.confirmed) {
        return false
    }
    if (!validateDateISO(payments.paidAt)) {
        return false
    }
    return true
}

function processPayment(payments: Payment[]) {
    const validPayments = payments.filter(validRulesPayment)

    const userMapPay: Record<number, UserPaymentSummary> = {}

    const totalAmount = validPayments.reduce((acc, pay) => acc + pay.amount, 0)

    validPayments.forEach(p => {
        if (!userMapPay[p.userId]) {
            userMapPay[p.userId] = {
                userId: p.userId,
                totalPaid: 0,
                paymentsCount: 0
            }
        }

        userMapPay[p.userId].totalPaid += p.amount
        userMapPay[p.userId].paymentsCount += 1
    })

    const userSummaries = Object.values(userMapPay)

    return {
        validPayments,
        totalAmount,
        userSummaries
    }
}

const result5 = processPayment(payments)
console.log(result5);
