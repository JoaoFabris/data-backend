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

interface Product {
  name: string;
  price: number;
}

function filterAndSortProducts(
  products: Product[], 
  minPrice: number
): Product[] {
  // SEU CÓDIGO AQUI
}