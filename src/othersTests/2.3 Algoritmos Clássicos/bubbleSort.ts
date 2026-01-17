//Exercício 21: Ordenação Bubble Sort

const numMock: number[] = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(arr: number[]): number[] {
  return arr.sort((a,b) => {
    return a-b //crescente
  })
}

console.log(bubbleSort(numMock));

// retorno 

// [
//   11, 12, 22, 25,
//   34, 64, 90
// ]