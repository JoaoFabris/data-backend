// Teste 1 — GroupBy avançado (Pedidos por status + métricas)

// Tema: loops, objetos, agrupamento, agregação.
// Entrada: Order[] com { id, customer, status, amount }
// Saída: objeto com grupos + contagem + soma por status.

// Regras:

// status: "pending" | "paid" | "canceled"

// Retorne:

// {
//   groups: { pending: Order[]; paid: Order[]; canceled: Order[] },
//   summary: { pending: {count, total}, paid: {count, total}, canceled: {count, total} },
//   topCustomerByPaidTotal: string | null
// }


// topCustomerByPaidTotal: cliente com maior soma apenas em pedidos pagos. Se não houver pagos, null.

// Plus: ignorar pedidos com amount <= 0.

//

interface OrderInter {
    id: number,
    customer: string,
    status: StatusOrder,
    amount: number,
}

type StatusOrder = "pending" | "paid" | "canceled"

interface OrderReport {
    groups: Record<StatusOrder, OrderInter[]>,
    summary: Record<StatusOrder, { count: number, total: number }>,
    topCustomerByPaidTotal: string | null //cliente com maior soma apenas em pedidos pagos. Se não houver pagos, null.
}

const ordersMock: OrderInter[] = [
    { id: 1, customer: "Ana", status: "paid", amount: 120 },
    { id: 2, customer: "João", status: "pending", amount: 80 },
    { id: 3, customer: "Maria", status: "paid", amount: 200 },
    { id: 4, customer: "Ana", status: "paid", amount: 50 },
    { id: 5, customer: "Pedro", status: "canceled", amount: 60 },
    { id: 6, customer: "João", status: "paid", amount: 200 }, // empate com Maria (200)
    { id: 7, customer: "Maria", status: "pending", amount: 150 },
    { id: 8, customer: "Lucas", status: "canceled", amount: 0 },   // inválido (ignorar)
    { id: 9, customer: "Ana", status: "pending", amount: -10 }, // inválido (ignorar)
    { id: 10, customer: "João", status: "paid", amount: 10 },
];

function buildOrdersReport(orders: OrderInter[]) {
    const groups: Record<StatusOrder, OrderInter[]> = {
        pending: [],
        paid: [],
        canceled: []
    }
    const summary: Record<StatusOrder, { count: number, total: number }> = {
        pending: { count: 0, total: 0 },
        paid: { count: 0, total: 0 },
        canceled: { count: 0, total: 0 }
    }


    const paidTotalsByCustomer: Record<string, number> = {};

    // PARA cada order em orders
    //  SE order.amount <= 0
    //   RETORNE false
    //
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].amount <= 0) {
            continue
        }
        // element = orders[i].status
        const element = orders[i].status
        // SE groups[element]
        //   groups[element].push(orders[i])

        groups[element].push(orders[i])


        summary[element].count += 1,
            summary[element].total += orders[i].amount

        const client = orders[i].customer
        if (orders[i].status === 'paid') {
            if (!paidTotalsByCustomer[client]) {
                paidTotalsByCustomer[client] = orders[i].amount
            } else {
                paidTotalsByCustomer[client] += orders[i].amount
            }
        }

        let Toptotal: number = 0
        let topCustumer: string = ''

        for(const customer in paidTotalsByCustomer) {
            // Acessa a chave e o valor correspondente custumer = joao ou ana
            const total = paidTotalsByCustomer[customer]
            if(total > Toptotal){
                Toptotal = total,
                topCustumer = customer
            }
        }
        
        return {
            groups,
            summary,
            paidTotalsByCustomer
        }

    }

}


console.log(JSON.stringify(buildOrdersReport(ordersMock), null, 2));