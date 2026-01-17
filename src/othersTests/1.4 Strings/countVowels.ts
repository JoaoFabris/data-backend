//Exercício 11: Contar vogais

//Use find() para encontrar uma única ocorrência (como um item por ID) e filter() para selecionar múltiplos itens (como todos os itens de um gênero específico). 

function countVowels(text: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let sum = 0
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
        for (let j = 0; j < vowels.length; j++) {
            console.log(vowels[j]);
            if (text[i].toLocaleLowerCase() === vowels[j]) {
                sum++
                console.log(`${text[i]} é igual a ${vowels[j]}` );
                break
            }
        }
    }
    return sum
}
console.log(countVowels('abca'));


//ATENÇÃO FOR DENTRO DE FRO - > O(n * 5) Isso gera complexidade O(n * 5) (ainda ok, mas evitável)


// A notação O(n * 5) é equivalente a O(n). Ambas representam a mesma ordem de complexidade de tempo linear na programação [1]. 
// O que isso significa:
// O(n): Indica que o tempo de execução de um algoritmo cresce de forma diretamente proporcional ao tamanho da entrada (n). Por exemplo, se a entrada duplicar, o tempo de execução também duplicará.
