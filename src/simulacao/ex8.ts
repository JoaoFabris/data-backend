// 🧪 EXERCÍCIO B — Agrupar com filtro prévio
// Enunciado

// Você recebe uma lista de tickets de suporte:

// {
//   id: number,
//   priority: "low" | "medium" | "high",
//   resolved: boolean
// }


// Crie uma função que:

// Ignore tickets resolvidos

// Agrupe os restantes por prioridade

// Saída esperada
// {
//   low: [...],
//   high: [...]
// }

// O que isso testa

// Condição antes do agrupamento

// Fluxo lógico

// Clareza de código



//=========pseudocodigo
//funcao support(list)
// const  resultado sendo um objeto {low: [], high: []}
//  FOR i de 0 a tamanho list 
//  const elemento = list[i].priority
//    SE list[i].resolved = falso e != 'medium'
//    resultado[elemento].push(list[i])
//    FIM SE
//   FIMPARA
// RETORNA result
//FIM FUNC

const ticketsMock: SuportInterface[] = [
    // Tickets resolvidos (serão ignorados)
    { id: 1, priority: "high", resolved: true },
    { id: 2, priority: "medium", resolved: true },
    { id: 3, priority: "low", resolved: true },
    { id: 4, priority: "high", resolved: true },
    { id: 5, priority: "medium", resolved: true },

    // Tickets não resolvidos (serão agrupados)
    { id: 6, priority: "high", resolved: false },
    { id: 7, priority: "low", resolved: false },
    { id: 8, priority: "medium", resolved: false },
    { id: 9, priority: "high", resolved: false },
    { id: 10, priority: "low", resolved: false },
    { id: 11, priority: "medium", resolved: false },
    { id: 12, priority: "high", resolved: false },
    { id: 13, priority: "low", resolved: false },
    { id: 14, priority: "medium", resolved: false },
    { id: 15, priority: "high", resolved: false }
]

interface SuportInterface {
    id: number,
    priority: Priority,
    resolved: boolean
}

type Priority = 'low' | 'medium' | 'high'

interface SupportResponse {
    low: SuportInterface[],
    high: SuportInterface[]
}

function support(list: SuportInterface[]): SupportResponse {
    const result: SupportResponse = { low: [], high: [] }

    for (let i = 0; i < list.length; i++) {
        const element = list[i].priority
        if (!list[i].resolved)
            if (element !== 'medium' && result[element]) {
                result[element].push(list[i])
            }
    }
    return result
}

console.log(support(ticketsMock));


