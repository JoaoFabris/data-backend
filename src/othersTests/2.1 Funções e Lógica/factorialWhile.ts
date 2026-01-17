//Exercício 15: Fatorial
function factorialWhile(n: number): number {
    let i = 1
    let result = 1
    while (i <= n) {
        result = i * result
        i++
    }
    return result
}

console.log(factorialWhile(5));
