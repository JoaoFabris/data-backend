// Retornar: "criança" (0-12), "adolescente" (13-17), 
// "adulto" (18-59), "idoso" (60+)

// Array de testes com casos estratégicos
const testesIdade = [
    // 👶 CRIANÇAS (0-12)
    0,    // Recém-nascido
    1,    // Bebê
    5,    // Criança pequena
    10,   // Criança
    12,   // Limite superior criança

    // 🧒 ADOLESCENTES (13-17)
    13,   // Início adolescência
    15,   // Meio da adolescência
    17,   // Limite superior adolescente

    // 👤 ADULTOS (18-59)
    18,   // Início vida adulta
    25,   // Adulto jovem
    30,   // Adulto
    45,   // Meia idade
    59,   // Limite superior adulto

    // 👴 IDOSOS (60+)
    60,   // Início terceira idade
    70,   // Idoso
    85,   // Idoso avançado
    100,  // Centenário

    // 🧪 CASOS EXTREMOS
    -5,   // Idade negativa (inválida)
    150,  // Idade muito alta
    0.5,  // Decimal (inválido se só aceitar inteiros)
];

function classifyAge(age: number): string {
    if (!Number.isInteger(age)) {
        throw new Error("idade tem q ser um número inteiro")
    }
    if (age < 0) {
        throw new Error("Idade tem q ser maior ou igual a 0")
    }
    if (age <= 12) {
        return 'CRIANÇA'
    }
    if (age <= 17) {
        return 'ADOLESCENTE'
    }
    if (age <= 59) {
        return 'ADULTO'
    }
    if (age >= 60 && age <= 100) {

        return 'IDOSO'
    }
    return 'CASOS EXTREMOS'

}

function resultClassifyAge(age: number): string {
    try {
        return classifyAge(age)
    } catch (error: any) {
        return `Error --- ${error.message}`
    }
}

const ResponseTest = testesIdade.forEach((age, index) => {
    const result = resultClassifyAge(age)
    if(result === 'CASOS EXTREMOS') {
        console.log(`${index + 1}: ATENÇÃO!! ${age} -> ${result}`); 
    }
    console.log(`${index + 1}: a idade ${age} -> ${result}`);
})



