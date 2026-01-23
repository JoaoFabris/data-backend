// 📌 Enunciado

// Crie uma função que receba uma string e retorne true se ela for um palíndromo, ou false caso contrário.

// Regras:

// Ignore espaços

// Ignore maiúsculas/minúsculas

// Considere apenas letras (opcional, mas se lembrar é ponto extra)

// Exemplos:
// "ovo" → true
// "Ana" → true
// "subi no onibus" → true
// "teste" → false

// função isPalin(texto)
// e fazer uma condição de verificação se é string o texto recebido
// retirar o espaço do texto
// ignorar as maisculos e minusculos
// faremos a inversao dessa string e iremos comparar com a string original
// fim

function isPalin(word: string): boolean {
    if (typeof word !== 'string') {
        return false
    }
    const normalize = word.toLocaleLowerCase().split(" ").join("") //o split(" ") pega cada word e transforma em array separadamente o join apenas pega array e junta ele
    console.log(normalize, 'normalizado');

    const textReverse = normalize.split("").reverse().join("") // fazemos o split(""), pois assim e a unuica forma de reverter, ele vai pegar cada plavras e separalas em um array de forma isolado
    //console.log(letras); // ["C", "o", "d", "e"]
    console.log(textReverse, 'reverso');

    if (normalize !== textReverse) {
        return false
    }

    return true
}

console.log(isPalin("ovo"));

// Qual a complexidade desse algoritmo?”

// ✔️ Resposta correta:

// Tempo: O(n)

// Espaço: O(n) (por causa do array e string invertida)

// pois n existe loop para pelo menos ser o(n²)

// Mesmo percorrendo a string mais de uma vez, as operações são sequenciais e independentes, não aninhadas. Por isso a complexidade permanece linear, O(n)