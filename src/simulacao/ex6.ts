// 🧪 EXERCÍCIO 6 — AGRUPAMENTO DE DADOS (groupBy)

// 📌 Esse exercício cai bastante porque avalia:

// loops

// objetos

// organização do raciocínio

// noção de backend (agrupar / transformar dados)

// 🧠 Contexto (como o avaliador falaria)

// “Agora vamos trabalhar com uma transformação de dados em memória.”

// 📌 Enunciado

// Você recebe uma lista de pedidos.
// Cada pedido possui:

// {
//   id: number,
//   customer: string,
//   status: "pending" | "paid" | "canceled"
// }


// Crie uma função que agrupa os pedidos por status.

// 📥 Entrada
// [
//   { id: 1, customer: "Ana", status: "paid" },
//   { id: 2, customer: "João", status: "pending" },
//   { id: 3, customer: "Maria", status: "paid" },
//   { id: 4, customer: "Pedro", status: "canceled" },
//   { id: 5, customer: "Lucas", status: "pending" }
// ]

// 📤 Saída esperada
// {
//   paid: [
//     { id: 1, customer: "Ana", status: "paid" },
//     { id: 3, customer: "Maria", status: "paid" }
//   ],
//   pending: [
//     { id: 2, customer: "João", status: "pending" },
//     { id: 5, customer: "Lucas", status: "pending" }
//   ],
//   canceled: [
//     { id: 4, customer: "Pedro", status: "canceled" }
//   ]
// }

//=========== ETAPA 1 — PSEUDOCÓDIGO (obrigatório)

// groupByStatus(order)
// cria um novo objeto vazio chamado resultado
// PARA cada pedido dentro de order
//  SE resultado nao tiver pedidio.status 
//   cria um novo array vazio
//  add novo order ao array correspondente objeto resultado
// FIM PARA
// FIM FUNC

interface OrderInterface {
    id: number,
    custumer: string,
    status: TypeStatus
}

type TypeStatus = 'paid'| 'canceled'| 'pending'

const arrayOrder:OrderInterface[] =  [
  { id: 1, custumer: "Ana", status: "paid" },
  { id: 2, custumer: "João", status: "pending" },
  { id: 3, custumer: "Maria", status: "paid" },
  { id: 4, custumer: "Pedro", status: "canceled" },
  { id: 5, custumer: "Lucas", status: "pending" }
]




function groupByStatus(orders: OrderInterface[]): Record<TypeStatus, OrderInterface[]> {
    const result: Record<TypeStatus, OrderInterface[]> = {
        paid: [],
        pending: [],
        canceled: [],
    }

    for(let i = 0; i < orders.length; i++){
        const element = orders[i].status
        if(result[element]) {
            result[element].push(orders[i])
        }
    }
    return result
}

console.log("🔍 Resultado do agrupamento:", groupByStatus(arrayOrder))

