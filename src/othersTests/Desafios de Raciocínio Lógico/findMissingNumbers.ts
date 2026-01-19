
const arrayMissing = [1,2,3,6,7,8, 12]

// Array de 1 a 10 com alguns números faltando
function findMissingNumbers(arr: number[]): number[] {
    const newArray: number[] = []
    for (let i = 1; i <= 10; i++) {
        if (!arr.includes(i) && i <= 10 && i > 0) {
            newArray.push(i)
        }
    }
    return newArray
}

console.log(findMissingNumbers(arrayMissing));
