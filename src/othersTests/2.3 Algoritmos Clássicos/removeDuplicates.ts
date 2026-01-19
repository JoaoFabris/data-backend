const numMockDuplicados: number[] = [1, 2, 2, 3, 4, 4, 4, 5, 6, 1, 9, 9];

function removeDuplicates(arr: number[]): number[] {
    const newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeDuplicates(numMockDuplicados));
