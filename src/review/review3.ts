/*
PROBLEMA:
Você tem um array de alunos com suas notas e pesos.
Calcule a média ponderada de cada aluno e retorne apenas
os alunos aprovados (média >= 7), ordenados por média (maior→menor).

ENTRADA: array de objetos Aluno
SAÍDA: array de objetos com nome e média

EXEMPLO:
Input: [
  { nome: "Ana", notas: [8, 9], pesos: [2, 3] },
  { nome: "Bruno", notas: [5, 6], pesos: [2, 3] },
  { nome: "Carlos", notas: [9, 10], pesos: [2, 3] }
]

Output: [
  { nome: "Carlos", media: 9.6 },
  { nome: "Ana", media: 8.6 }
]

Fórmula média ponderada: 
(nota1*peso1 + nota2*peso2 + ...) / (peso1 + peso2 + ...)
*/

interface Aluno {
    nome: string;
    notas: number[];
    pesos: number[];
}

interface AlunoAprovado {
    nome: string;
    media: number;
}

function calcularAprovados(alunos: Aluno[]): AlunoAprovado[] {
    const aprovados: AlunoAprovado[] = []
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i]
        let peso1 = aluno.pesos[0] * aluno.notas[0]
        let peso2 = aluno.pesos[1] * aluno.notas[1]
        const calculate = (peso1 + peso2) / (aluno.pesos[0] + aluno.pesos[1])
        if (calculate >= 7) {
            aprovados.push({ // push pq é um array
                nome: aluno.nome,
                media: Number(calculate)
            })
        }

    }
    return aprovados.sort((a, b) => b.media - a.media) // maior para o menor

}

function calcularAprovados2(alunos: Aluno[]) {
    const aprovados: AlunoAprovado[] = []

    for (const aluno of alunos) {
        let soma = 0
        let peso = 0
        for (let i = 0; i < aluno.notas.length; i++) {
            soma += aluno.notas[i] * aluno.pesos[i]
            peso += aluno.pesos[i]
        }
        let media = soma / peso
        console.log(media);
        if (media >= 7) {
            aprovados.push({
                nome: aluno.nome,
                media: media
            })
        }
    }

    return aprovados.sort((a, b) => b.media - a.media)
}

// TESTE
const alunos = [
    { nome: "Ana", notas: [8, 9], pesos: [2, 3] },
    { nome: "Bruno", notas: [5, 6], pesos: [2, 3] },
    { nome: "Carlos", notas: [9, 10], pesos: [2, 3] },
    { nome: "Diana", notas: [7, 7], pesos: [2, 3] }
];

// console.log(calcularAprovados(alunos));
console.log(calcularAprovados2(alunos));


// for...in → percorre chaves (índices ou propriedades)

// for...of → percorre valores