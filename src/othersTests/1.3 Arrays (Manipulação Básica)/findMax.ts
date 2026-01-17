// 1.3 Arrays (Manipulação Básica)
// Exercício 7: Encontrar o maior número

function findMax(numbers: number[]): number {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }

    return max
}

console.log(findMax([-10, -2, -20]));

