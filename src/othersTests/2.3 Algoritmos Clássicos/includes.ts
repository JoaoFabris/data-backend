// Enunciado:
// Retorne true se o número existir no array, senão false.

const mockIncludes: number[] = [1, 2, 2, 3, 4, 4, 4, 5, 6, 1, 9, 9];
const forbidden: number[] = [1, 10];

function containsNumber(arr: number[], target: number): boolean {
    return arr.includes(target)
}

console.log(containsNumber(mockIncludes, 10));


// Exercício Bônus 2: Remover números proibidos

// Enunciado:
// Dado um array de números e outro com números proibidos, retorne um novo array sem os proibidos.

function removeForbidden(arr: number[], forbiddenArray: number[]): number[] {
    const newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {

        if (!forbiddenArray.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeForbidden(mockIncludes, forbidden));

//Retorne os valores que existem nos dois arrays.

function intersection(arr1: number[], arr2: number[]): number[] {
    const newArr: number[] = []
  for(let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
        newArr.push(arr1[i])
    }
  }
  return newArr
}

console.log(intersection(mockIncludes, forbidden));

// Enunciado:
// Retorne true se todos os valores do array existirem na lista permitida.

function isValidArray(arr: number[], allowed: number[]): boolean {
    for(let i = 0; i < allowed.length; i++){
        return arr.includes(allowed[i])
    }
    return false
}

console.log(isValidArray(mockIncludes, forbidden));