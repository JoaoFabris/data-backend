//Exercício 5: Contar números pares em um intervalo

function countEvens(start: number, end: number): number {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error("Número deve ser inteiro")
    }
    if (start > end) {
        throw new Error("'start' deve ser menor que 'end'")
    }
    let result = 0
    const showNumbers: number[] = []
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            showNumbers.push(i)
            result++
        }
    }

    console.log(`Os números pares são ${showNumbers}`);
    return result
}


console.log(`A quantidade de números pares são: ${countEvens(1, 10)}`);
