//Exercício 11: Contar vogais

//Use find() para encontrar uma única ocorrência (como um item por ID) e filter() para selecionar múltiplos itens (como todos os itens de um gênero específico). 

function countVowelsFilter(text: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return  text.toLowerCase().split('').filter(a => vowels.includes(a)).length
}

//ATENÇÃO FOR DENTRO DE FRO - > O(n * 5) Isso gera complexidade O(n * 5) (ainda ok, mas evitável)


// Split into individual characters
// const chars = "hello".split(""); 
// Result: ["h", "e", "l", "l", "o"]

console.log(countVowelsFilter('abca'));