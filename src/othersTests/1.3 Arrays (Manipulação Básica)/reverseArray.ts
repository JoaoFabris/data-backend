// Exercício 10: Inverter um array
function reverseArray(arr: any[]): any[] {
    let invArray = []
    let finalPosition = arr.length - 1
    for (let i = finalPosition; i >= 0; i--) { //o 0 na consição i>=0 será o fim do array => arr[0]
        let posArr = arr[i]
        invArray.push(posArr)
    }
    return invArray
}

console.log(reverseArray([1,3,6]));
