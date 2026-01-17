// Exercício 4: Somar todos os números de 1 até N
//exemplo, se for n =5 , 1+2+3+4+5

// for ([inicialização]; [condição]; [expressão final])
//    declaração

function sumUpTo(n: number): number {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum = sum + i // sum += i    Equivale a: sum = sum + i
  }
  return sum
}

console.log(sumUpTo(4));
