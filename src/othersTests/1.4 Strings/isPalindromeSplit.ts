//Exercício 12: Verificar palíndromo. lê da mesma forma de trás para frente e de frente para trás
//arara, ovo

function isPalindromeSplit(text: string):boolean {
    const textReserved = text.split('').reverse().join('') // join( transforma em stringde novo)
    console.log(textReserved)
    ;
    
    if(textReserved === text){
        return true
    }
    return false
}
console.log(isPalindromeSplit('ovo'))
//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array
// RETORNA UM ARRAY

// const a = ['o', 'v', 'o'];
// const b = ['o', 'v', 'o'];

// console.log(a === b); // false
// Mesmo conteúdo, resultado false.

// Por quê?
// Porque na memória acontece algo assim:

// css
// Copiar código
// a → endereço 0x001 → ['o', 'v', 'o']
// b → endereço 0x002 → ['o', 'v', 'o']

// a → endereço 0x001 → ['o', 'v', 'o']
// b → endereço 0x002 → ['o', 'v', 'o']