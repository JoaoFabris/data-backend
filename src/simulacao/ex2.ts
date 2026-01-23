// 🔁 AGORA VAMOS SUBIR UM NÍVEL (EXERCÍCIO 2)
// 🧪 Enunciado (nível real de estágio)

// Crie uma função que receba um array de números e retorne o segundo maior número.

// Regras:

// Se o array tiver menos de 2 números → retorne null

// Números podem se repetir

// [10, 5, 8, 10] → segundo maior é 10

// [5, 5, 5] → segundo maior é 5

// ⏱️ Etapa 1 — Pseudocódigo (obrigatório)

// ✋ Faça primeiro em pseudocódigo, como antes
// Nada de TypeScript ainda.

// Quando mandar:

// eu valido

// faço perguntas

// e você implementa

// 👉 Sua vez 👇

// uncao ArraySecond(nums) 
// se tamanho(nums) < 2
//  retornar null

//maior = nums[0]
//segundo = nums[1]
//para cada elemento em nums
//  se o valor elemento em nums > gratter
//    segegundo = maior
//    segundo = nums[i]
//  se valor > second
//    segundo = valor
// fim para
//retorno second
//fim funcao

function ArraySecond(num: number[]): number | null {
    if (num.length < 2) {
        return null
    }

    let gratter: number = num[0]
    let second: number = num[1]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > gratter) {
            second = gratter
            gratter = num[i]
        } else if (num[i] > second) {
            second = num[i]
        }
    }
    return second
}

function secondLargestSort(num: number[]): number | null {
    if (num.length < 2) return null
    const sort = num.sort((a, b) => b - a)
    return sort[1]
}
console.log(ArraySecond([1, 2, 3, 4, 7, 2, 3]))
console.log(secondLargestSort([1, 2, 3, 4, 7, 2, 3]))