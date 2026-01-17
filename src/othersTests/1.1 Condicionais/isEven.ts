// 🔥 Parte 1: Fundamentos Essenciais (O BÁSICO)
// 1.1 Condicionais
// Exercício 1: Verificar se um número é par ou ímpar

const testes = [
    2, 3, 10, 0, 45, 100, 1500, -850, -4, 1
];

//forEach interage com elementos dentro de um array
// currentValue (Required): The value of the current element being processed in the array.
// index (Optional): The index of the current element.
// arr (Optional): The array forEach() was called upon.
function isEven(num: number): boolean {
    if (!Number.isInteger(num)) {
        throw new Error("Deve ser inteiro")
    }
    return num % 2 === 0

}
function responseIsEven(num: number): string {
    try {
        return isEven(num) ? `${num} é par` : `${num} é impar`
    } catch (error: any) {
        return `Error: ${error.message}`
    }
}

// ========= Resultados
const resultIsEven = testes.forEach((numero, index) => {
    const res = responseIsEven(numero);
    console.log(`${index + 1} - O número ${res}` );
})
console.log(resultIsEven);


