/*
PROBLEMA:
Crie uma função que recebe um array de números e retorna
a soma apenas dos números positivos.

Exemplos:
- Input: [1, -4, 7, 12, -3]  →  Output: 20
- Input: [-1, -2, -3]        →  Output: 0
- Input: [5, 10, 15]         →  Output: 30
*/

const sumPos: number[] = [1, -4, 7, 12, -3]

function sumPositives(numbers: number[]): number {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result += numbers[i]
    }
  }
  return result
}

console.log(sumPositives(sumPos));
