//2.3 Algoritmos Clássicos
// Exercício 20: Busca Linear
const numbersMock: number[] = [10, 25, 30, 45, 60, 75, 90];
function linearSearch(arr: number[], target: number): number {
    for(let i = 0; i < arr.length; i++){
        if(arr[0] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(numbersMock, 10));
