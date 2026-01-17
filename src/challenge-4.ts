type PlanType = "basic" | "pro" | "enterprise";

type Subscription = {
    id: number;
    userId: number;
    plan: PlanType;
    price: number;
    startDate: string;
    active: boolean;
};

type UserPlanSummary = {
    userId: number;
    totalSpent: number;
    activePlans: number;
};

type SubscriptionReport = {
    validSubscriptions: Subscription[];
    totalRevenue: number;
    userSummaries: UserPlanSummary[];
};


const subscriptions: Subscription[] = [
    { id: 1, userId: 1, plan: "basic", price: 50, startDate: "2025-01-01", active: true },
    { id: 2, userId: 1, plan: "pro", price: 100, startDate: "2025-02-01", active: true },
    { id: 3, userId: 2, plan: "basic", price: 50, startDate: "invalid-date", active: true },
    { id: 4, userId: 2, plan: "enterprise", price: 300, startDate: "2025-01-10", active: false },
    { id: 5, userId: 3, plan: "pro", price: -20, startDate: "2025-01-15", active: true },
    { id: 6, userId: 3, plan: "basic", price: 50, startDate: "2025-01-20", active: true },
    { id: 7, userId: 4, plan: "pro", price: 100, startDate: "2025-01-05", active: true },
    { id: 8, userId: 4, plan: "basic", price: 50, startDate: "2025-13-01", active: true },
];


// Regras de validação

// Uma assinatura é válida se:

// userId > 0

// plan for "basic" | "pro" | "enterprise"

// price > 0

// startDate for uma data ISO válida (YYYY-MM-DD)

// active for true


// Resultado esperado (estrutura)
// {
//   validSubscriptions: [...],
//   totalRevenue: number,
//   userSummaries: [
//     {
//       userId: number,
//       totalSpent: number,
//       activePlans: number
//     }
//   ]
// }

function validDateISO(dataToString: string): boolean {
    const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dataRegex.test(dataToString)) {
        return false
    }
    const date = new Date(dataToString)
    if (isNaN(date.getTime())) {
        return false
    }

    const isoToString = date.toISOString().split("T")[0] //O JavaScript corrige datas inválidas automaticamente:
    return isoToString === dataToString

}

function validationRulesSubscription(subscriptions: Subscription): boolean {
    if (subscriptions.userId <= 0) {
        return false
    }
    if (subscriptions.plan !== "basic" && subscriptions.plan !== "enterprise" && subscriptions.plan !== "pro") {
        return false
    }
    if (subscriptions.price <= 0) {
        return false
    }
    if (!subscriptions.active) {
        return false
    }
    if (!validDateISO(subscriptions.startDate)) {
        return false
    }
    return true
}

function processSubscription(subscriptions: Subscription[]): SubscriptionReport {
    const validSubscriptions = subscriptions.filter(validationRulesSubscription)

    const totalRevenue = validSubscriptions.reduce((acc, sub) => acc + sub.price, 0)

    const userMapSub: Record<number, UserPlanSummary> = {} //Em seguida, uso um objeto indexado por userId para agrupar os dados e
    //  gerar métricas por usuário, garantindo uma única passagem no array, o que mantém boa performance.”

    validSubscriptions.forEach(s => {
        if (!userMapSub[s.userId]) {
            userMapSub[s.userId] = {
                userId: s.userId,
                totalSpent: 0,
                activePlans: 0,
            }
        }

        userMapSub[s.userId].totalSpent += s.price
        userMapSub[s.userId].activePlans += s.active ? 1 : 0 // soma mais 1 se existir, se n, soma zero
    })

    const userSummaries = Object.values(userMapSub)

    return {
        validSubscriptions,
        totalRevenue,
        userSummaries
    }
}

const reuslt4 = processSubscription(subscriptions)
console.log(reuslt4);
