// FUNÇÃO contarPares(lista)

//   DEFINIR contador ← 0

//   PARA i ← 0 ATÉ tamanho(lista) - 1 FAÇA
//     SE lista[i] MOD 2 = 0 ENTÃO
//       contador ← contador + 1
//     FIM SE
//   FIM PARA

//   RETORNAR contador

// FIM FUNÇÃO

const lista = [1, 2, 3, 4, 6, 7, 10]
function countPares(arr: number[]): number {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count += 1
        }
    }
    return count
}

console.log(countPares(lista));
