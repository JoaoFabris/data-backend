const countOcucc: number[] = [1, 2, 2, 3, 3, 4, 5, 1, 1]
const countOcucc2: string[] = ['a', 'b', 'c', 'a', 'b']
const countOcucc3: number[] = [2, 7, 11, 15]



// Exemplo: [1, 2, 2, 3] → { "1": 1, "2": 2, "3": 1 }
function countOccurrences(arr: any[]): Record<string, number> {
    const count: Record<string, number> = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (!count[element]) {
            count[element] = 1
        } else {
            count[element] += 1
        }
    }
    return count
}

console.log(countOccurrences(countOcucc));


// "Qual é o valor que está guardado na etiqueta que tem o nome do que estiver dentro da variável element?"

// O Desafio: O Primeiro Caractere Único
// Escreva uma função que receba uma string e retorne o primeiro caractere que não se repete. Se todos se repetirem, retorne null.
// Exemplo:
// Entrada: "pindamonhangaba"
// A letra "p" aparece 1 vez.
// A letra "i" aparece 1 vez.
// A letra "n" aparece 2 vezes.
// ... e assim por diante.
// O objetivo:
// Primeiro, conte quantas vezes cada letra aparece (exatamente como você fez com os números).
// Depois, percorra a string novamente e veja qual é a primeira letra que tem o valor 1 no seu objeto de contagem.


function countLetters(s: string): Record<string, number> {
    const count: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        if (!count[letter]) {
            count[letter] = 1
        } else {
            count[letter] += 1
        }
    }
    return count
}

// console.log(countLetters('pindamonhangaba'));


// Vamos elevar um pouco o nível. Este próximo exercício usa a mesma lógica de mapeamento com objetos, mas agora você não vai apenas contar, você vai usar o objeto para guardar uma posição (índice).
// O Desafio: Duas Somas (Two Sum) — Versão Simplificada
// Você receberá um array de números e um alvo (um número somado). Você deve encontrar quais são os dois números no array que, somados, resultam no alvo.
// A lógica com objeto:
// Em vez de apenas contar quantas vezes um número aparece, você vai guardar:
// Chave: O número que você já viu.
// Valor: A posição (i) onde ele estava.
// Por que? Porque para cada número que você lê, você pode calcular: "Quanto falta para chegar no alvo?" (Alvo - número atual). Se esse "quanto falta" já estiver no seu objeto, você encontrou o par!

function twoSum(arr: number[], target: number): number[] | null {
    // Usamos o objeto como uma "memória"
    // Chave: o número que já vimos
    // Valor: a posição (índice) onde ele estava
    const seen: Record<number, number> = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const complement = target - element; // Quanto falta para chegar no alvo

        // Verificamos se o que falta já passou pelo nosso loop antes
        // Usamos "!== undefined" porque o índice pode ser 0 (e !0 é true)
        if (seen[complement] !== undefined) {
            // Se o complemento existe no objeto, achamos o par!
            // Retornamos o índice de quem já estava lá e o índice atual
            return [seen[complement], i];
        }

        // Se não achamos o par ainda, "carimbamos" o número atual no objeto
        // Chave: o número / Valor: o índice i
        seen[element] = i;
    }

    return null; // Caso não encontre nenhum par
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9)); // Saída: [0, 1] (Pois 2 + 7 = 9)