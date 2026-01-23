// 🏢 Desafio: O Agrupador de Leads
// Contexto: A BGC recebe leads (potenciais clientes) de diferentes canais (LinkedIn, Instagram, Indicação). O gestor quer saber quantos leads vieram de cada canal, mas os dados brutos estão bagunçados.

// O que você deve fazer:

// Interface: Crie uma interface Lead com nome e origem.

// Processamento: Crie uma função que receba um array de leads e retorne um Objeto onde as chaves são as origens e os valores são a quantidade de leads daquela origem.

// Regra Extra: Se a origem estiver vazia ou for undefined, ignore o lead.




interface Lead {
    nome: string;
    origem?: string;
}

const leadsEntrada: Lead[] = [ // of
    { nome: "Tiago", origem: "LinkedIn" },
    { nome: "Carla", origem: "Instagram" },
    { nome: "Renato", origem: "LinkedIn" },
    { nome: "Maria", origem: "Indicação" },
    { nome: "Desconhecido", origem: undefined },
    { nome: "Lucas", origem: "Instagram" },
];

// O resultado esperado deve ser algo como: 
// { "LinkedIn": 2, "Instagram": 2, "Indicação": 1 }

function contarLeadsPorOrigem(lista: Lead[]): Record<string, number> {
    // DICA: O tipo Record<string, number> define um objeto que 
    const result: Record<string, number> = {}
    // terá strings como chaves e números como valores.
    lista.forEach((e) => {
        if (e.origem !== undefined) {
            if (!result[e.origem]) {
                result[e.origem] = 1
            } else {
                result[e.origem] += 1
            }
            
        }
    })

    return result;
}

console.log(contarLeadsPorOrigem(leadsEntrada));