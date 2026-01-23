//Exercício 19: Agrupar por categoria
interface Product {
    name: string;
    category: string;
    price: number;
}

type category = 'Eletrônicos' | 'Móveis' | 'Livros'


const productsMock: Product[] = [
    { name: "Notebook Dell", category: "Eletrônicos", price: 4500 },
    { name: "Mouse Logitech", category: "Eletrônicos", price: 150 },
    { name: "Teclado Mecânico", category: "Eletrônicos", price: 350 },

    { name: "Cadeira Gamer", category: "Móveis", price: 1200 },
    { name: "Mesa Escritório", category: "Móveis", price: 900 },

    { name: "Clean Code", category: "Livros", price: 120 },
    { name: "Design Patterns", category: "Livros", price: 180 }
];


function groupByCategory(products: Product[]): Record<string, Product[]> {
    const newArrayCategory: Record<string, Product[]> = {}
    products.forEach((a) => {
        if (!newArrayCategory[a.category]) {
            newArrayCategory[a.category] = []
        }
        newArrayCategory[a.category].push(a)
    })
    return newArrayCategory

}

console.log(groupByCategory(productsMock));
