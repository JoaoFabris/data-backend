// Para números de 1 a N:
// - Múltiplo de 3: "Fizz"
// - Múltiplo de 5: "Buzz"
// - Múltiplo de ambos: "FizzBuzz"
// - Senão: o próprio número
function fizzBuzz(n: number): (string | number)[] {
    const result: (string | number)[] = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            result.push("Fizz")
        }
        else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i)
        }
    }
    return result
}

console.log(fizzBuzz(3));
