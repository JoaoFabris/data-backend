//Exercício 8: Somar todos os elementos
function sumArray(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    return sum
}

console.log(sumArray([1,3,6]));
