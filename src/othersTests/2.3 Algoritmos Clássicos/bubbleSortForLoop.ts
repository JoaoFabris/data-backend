//Exercício 21: Ordenação Bubble Sort

const numMock2: number[] = [64, 34, 25, 12, 22, 11, 90];
const numMock3: number[] = [4,3,2,1];


function bubbleSortForLoop(arr: number[]): number[] {
  const newArray: number[] = [...arr];
  for (let i = 0; i < arr.length; i++) { // aqui ele ira entrar dentro do for i, ai dentro do for j, assim q ele terminar de percorrer todo o for j(j.length)
    for (let j = 0; j < arr.length - 1; j++) { // arr.length -1, poiis quandp ele chegar no indice final, ele iria somar + 1, e ai esse indice n iria existir 
      if (newArray[j] > newArray[j + 1]) {
        const maior = newArray[j]

        newArray[j] = newArray[j + 1]
        newArray[j + 1] = maior
      }
    }
  }

  return newArray
}

console.log(bubbleSortForLoop(numMock3));

// retorno 

// [
//   11, 12, 22, 25,
//   34, 64, 90
// ]