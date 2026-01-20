// FUNÇÃO éPrimo(numero)
//   SE numero <= 1 ENTÃO
//     RETORNAR falso
//   FIM SE

//   PARA i DE 2 ATÉ raiz_quadrada(numero) FAÇA
//     SE numero % i == 0 ENTÃO
//       RETORNAR falso
//     FIM SE
//   FIM PARA

//   RETORNAR verdadeiro
// FIM FUNÇÃO


function isPrimePseu(n: number): boolean {
    if (n <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false // se ele retornar com valor '0' na restante da divi, entao ele tem um divisor, ou seja, n é primo. Resto zero ⇒ existe divisor ⇒ não é primo
        }
    }
    return true
}

console.log(isPrimePseu(4));
