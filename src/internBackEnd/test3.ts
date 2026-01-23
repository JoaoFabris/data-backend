// 🛠️ Desafio Prático: O Analista de Riscos
// Contexto: Você recebeu uma lista de empresas que desejam ser clientes da BGC. Sua missão é criar uma função que filtre as empresas "aptas" e calcule uma pontuação de risco para cada uma.

// O que você deve fazer (Requisitos):
// Tipagem: Crie uma interface para representar a Empresa.

// Filtro: Remova empresas que estão com o status "inativo".

// Lógica: Adicione um campo chamado score a cada empresa seguindo a regra:

// Se o faturamento for maior que 100.000, ganha 50 pontos.

// Se tiver mais de 10 funcionários, ganha 30 pontos.

// Caso contrário, ganha 10 pontos.

// Saída: Retorne a lista de empresas aptas ordenada pelo faturamento (do maior para o menor).




// 1. Defina a Interface aqui

interface Empresa {
    nome: string;
    faturamento: number;
    funcionarios: number;
    status: 'ativo' | 'inativo';
    score?: number; // Opcional porque será calculado depois
}

const empresasEntrada: Empresa[] = [
    { nome: "Tech Corp", faturamento: 150000, funcionarios: 5, status: 'ativo' },
    { nome: "Bio Life", faturamento: 80000, funcionarios: 12, status: 'ativo' },
    { nome: "Old Shop", faturamento: 50000, funcionarios: 2, status: 'inativo' },
    { nome: "Cyber Net", faturamento: 200000, funcionarios: 20, status: 'ativo' },
];

// 2. Implemente a função de processamento
function processarEmpresas(lista: Empresa[]): Empresa[] {
    const resultado: Empresa[] = []
    for(const empreasa of lista) {
        if(empreasa.status === 'inativo'){
            continue
        }
        let score = 0
        if(empreasa.faturamento > 100000) {
            score += 50
        }
        if(empreasa.funcionarios > 10) {
            score += 30
        }
        else {
            score += 10
        }

        resultado.push({
            ...empreasa,
            score
        })
    }

    return resultado // Altere para retornar o resultado
}

// Teste o resultado
console.log(processarEmpresas(empresasEntrada));