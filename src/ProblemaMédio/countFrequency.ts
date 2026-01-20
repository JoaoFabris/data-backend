/*
PROBLEMA:
Crie uma função que recebe um array de strings e retorna
um objeto contando quantas vezes cada string aparece.

Exemplos:
- Input: ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
- Output: { maçã: 3, banana: 2, laranja: 1 }
*/

const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
const count = [1, 2, 2, 3, 1, 1]
const word = "banana"

function countFrequency(items: string[]): Record<string, number> {
  const result: Record<string, number> = {}

  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    //     Ele assume:

    // Se o valor é undefined → trata como “não existe”

    // Se o valor é um número > 0 → trata como “existe”

    // E isso funciona perfeitamente para contador de frequência, porque:

    // Você nunca armazena 0

    // Você só trabalha com números positivos

    if (result[item]) { // “O valor associado a essa chave é truthy?”
      result[item]++; // o result[item] retorna o Value desse objeto 

    } else {
      result[item] = 1
    }
  }
  return result

}


// Crie uma função que recebe um array de números e retorna um objeto contando quantas vezes cada número aparece.

// Exemplo

// Input: [1, 2, 2, 3, 1, 1]
// Output: { 1: 3, 2: 2, 3: 1 }

function countNumb(num: number[]): Record<string, number> {
  const result: Record<string, number> = {}

  for (let i = 0; i < num.length; i++) {
    const n = num[i]
    if (result[n]) {
      result[n]++
    } else {
      result[n] = 1
    }
  }
  return result

}

// Exercício 2 — Contar letras em uma palavra
// PROBLEMA

// Crie uma função que recebe uma string e retorna um objeto com a contagem de cada letra.

// Exemplo

// Input: "banana"
// Output: { b: 1, a: 3, n: 2 }

//========== Eu consigo fazer length de uma 'string'
function countLetters1(word: string): Record<string, number> {
  const result: Record<string, number> = {}
  const toSlice = word.split("")
  console.log(toSlice);

  for (let i = 0; i < toSlice.length; i++) {
    const letter = toSlice[i]

    if (result[letter]) {
      result[letter]++
    } else {
      result[letter] = 1
    }
  }
  return result
}


function countLetters2(word: string): Record<string, number> {
  const result: Record<string, number> = {}
  for(const letter of word) {
    if(result[letter]) {
      result[letter] ++
    } else {
      result[letter] = 1
    }
  }
  return result
}

function countLetters3(word: string): Record<string, number> {
  const result: Record<string, number> = {}
  console.log(word.length);

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (result[letter]) {
      result[letter]++
    } else {
      result[letter] = 1
    }
  }
  return result
}

// Exercício 3 — Contar palavras em uma frase
// PROBLEMA

// Crie uma função que recebe uma frase e retorna um objeto com a frequência de cada palavra.

// Exemplo

// Input: "oi tudo bem tudo oi"
// Output: { oi: 2, tudo: 2, bem: 1 }



console.log(countFrequency(fruits));
console.log(countNumb(count));
console.log(countLetters(word));

