// Retornar o N-ésimo número da sequência Fibonacci
function fibonacci(n: number): number {
    if (n <= 1) return n;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}


console.log(fibonacci(5));



// A sequência de Fibonacci funciona como uma série numérica onde cada número é a soma dos dois anteriores, começando por 0 e 1 (0, 1, 1, 2, 3, 5, 8...)