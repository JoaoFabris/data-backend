// esafio Nível "AWS / Serverless" (Objetos Aninhados)
// Como a BGC usa AWS e Serverless, os dados quase nunca vêm "mastigados". Eles vêm em objetos grandes com sub-objetos (chamados de nested objects).

// O Problema: A empresa agora recebe um objeto de Logística. Você precisa extrair os nomes dos motoristas que estão com o caminhão "cheio" e retornar uma string única separada por vírgulas.

// Requisitos:

// Use a Interface fornecida.

// Filtre apenas onde ocupado for true.

// Retorne apenas uma string (Ex: "João, Maria, Pedro").

interface Viagem {
    id: number;
    info: {
        motorista: string;
        caminhao: {
            placa: string;
            ocupado: boolean;
        };
    };
}

const viagens: Viagem[] = [
    { id: 1, info: { motorista: "Carlos", caminhao: { placa: "ABC-123", ocupado: true } } },
    { id: 2, info: { motorista: "Ana", caminhao: { placa: "DEF-456", ocupado: false } } },
    { id: 3, info: { motorista: "Beatriz", caminhao: { placa: "GHI-789", ocupado: true } } },
];

function listarMotoristasOcupados(lista: Viagem[]): string {
    const result = lista.filter((e) => e.info.caminhao.ocupado).map(e => e.info.motorista).join(", ")
    return result
}

console.log(listarMotoristasOcupados(viagens)); // Esperado: "Carlos, Beatriz"
// Consegue resolver esse acessando as propriedades dentro de info e caminhao? Esse tipo de acesso (objeto.sub.sub) é 90% do que um estagiário faz em ambiente AWS.