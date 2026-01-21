function removerDuplicatas(array: number[]): number[] {
    const result: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

// Teste:
console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

function maiorNumero(numeros: number[]): number {
    let maior: number = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}

// Teste:
console.log(maiorNumero([3, 7, 2, 9, 1])); // 9

function somarArray(numeros: number[]): number {
    return numeros.reduce((acc, curr) => acc + curr, 0)
    // let result: number = 0
    // for (let i = 0; i < numeros.length; i++) {
    //     result = result + numeros[i]
    // }
    // return result
}

// Teste:
console.log(somarArray([1, 2, 3, 4, 5])); // 15


function contarVogais(texto: string) {
    // Seu código aqui
    const volgais = 'aeiou'
    let soma = 0
    for (let i = 0; i < texto.length; i++) {
        if (volgais.includes(texto[i])) {
            soma += 1
        }
    }
    return soma
}

// Teste:
console.log(contarVogais("hello world")); // 3

function elementoMaisFrequente(array: number[]) {
    const freq: Record<string, number> = {}

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (freq[element]) {
            freq[element]++
        } else {
            freq[element] = 1
        }
    }
    for(const obj in freq){
        console.log(obj, 'esses sao os obj');
        
    }

}

// Teste:
console.log(elementoMaisFrequente([1, 2, 2, 3, 3, 3, 4])); // 3