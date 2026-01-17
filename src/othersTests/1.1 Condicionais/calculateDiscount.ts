// Regras:
// - Até R$100: sem desconto
// - R$100 a R$500: 10% desconto
// - Acima de R$500: 20% desconto
function calculateDiscount(value: number): number {
    if (value <= 100) {
        return value;
    }
    if (value > 100 && value < 500) {
        return value * 0.9
    }
    return value * 0.8
}

console.log(calculateDiscount(500));
// npx ts-node src/othersTests/calculateDiscount.ts 