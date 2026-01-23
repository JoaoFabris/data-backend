/*
PROBLEMA:
Você tem um array de produtos com nome e preço.
Crie uma função que retorna apenas os produtos com preço
acima de um valor mínimo, ordenados por preço (menor→maior).

Exemplo:
Input: 
  products = [
    { name: "Teclado", price: 150 },
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
  ]
  minPrice = 100

Output: [
  { name: "Teclado", price: 150 },
  { name: "Monitor", price: 800 }
]
*/

const productsreview = [
    { name: "Teclado", price: 150 },
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 },
    { name: "Headset", price: 1000 },
    { name: "SundBar", price: 180 }
]

interface ProductReview {
    name: string;
    price: number;
}

function filterAndSortProducts2(
    products: ProductReview[],
    minPrice: number
): ProductReview[] {
    const result = products.filter((e) => e.price > minPrice)
    return result.sort((a, b) => a.price - b.price)
    
}

console.log(filterAndSortProducts2(productsreview, 100));
