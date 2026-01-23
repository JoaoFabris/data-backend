// 🧪 EXERCÍCIO A — Agrupar e contar (group + aggregate)
// Enunciado

// Você recebe uma lista de transações:

// {
//   id: number,
//   type: "income" | "expense",
//   amount: number
// }


// Crie uma função que agrupa por type e calcula o total de amount por grupo.

// Entrada
// [
//   { id: 1, type: "income", amount: 100 },
//   { id: 2, type: "expense", amount: 50 },
//   { id: 3, type: "income", amount: 200 },
//   { id: 4, type: "expense", amount: 30 }
// ]

// Saída esperada
// {
//   income: 300,
//   expense: 80
// }

// O que isso testa

// GroupBy + soma

// Objeto acumulador

// Lógica de backend financeiro

//funcao(trans)
//cria um novo objeto resultado
// PARA cada trans dentro de lista de trans
//  cria uma const elemento para armazenar trans.type
//  SE resultado[elemento]
//   resultado[elemento] += trans.amount
// RETORNA resultado
//FIM FUNCAO

interface TransGroup {
    id: number,
    type: TypeTranss,
    amount: number
}

interface TransResponse {
    income: number,
    expense: number,
}

type TypeTranss = 'income' | 'expense'

const arrayTrans: TransGroup[] = [
  { id: 1, type: "income", amount: 100 },
  { id: 2, type: "expense", amount: 50 },
  { id: 3, type: "income", amount: 200 },
  { id: 4, type: "expense", amount: 30 }
]


function groupByType(trasn: TransGroup[]): TransResponse {
    const result: Record<TypeTranss, number> = {
        income: 0,
        expense: 0
    }
    for (let i = 0; i < trasn.length; i++) {
        const element = trasn[i].type //em js qualquer valor igual a 0 é false, logo o if vai dar errado aqui
        result[element] += trasn[i].amount
    }
    return result
}

console.log(groupByType(arrayTrans));
