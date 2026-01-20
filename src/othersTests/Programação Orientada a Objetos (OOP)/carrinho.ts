// Implemente:
// - addToCart(product: Product, quantity: number)
// - removeFromCart(productId: number)
// - calculateTotal(): number
// - applyDiscount(percentage: number): number

interface ProductOOP {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: ProductOOP;
  quantity: number;
}


// const cart = new Cart([]);
// Nesse momento:

// O constructor executa

// items recebe os dados iniciais

class Cart {
  private items: CartItem[] = []; //isso garante q a classe sempre começa com estado vazio
  //O array é privado para manter encapsulamento e garantir que todas as regras de negócio passem pelos métodos da classe.”
  constructor(initialItems: CartItem[]) {
    this.items = initialItems
  }
  //“Eu uso o constructor para garantir que o carrinho já nasça com um estado válido, permitindo inclusive reidratação de dados.


  // - addToCart(product: Product, quantity: number)
  addToCart(product: ProductOOP, quantity: number):boolean {
    if (quantity <= 0) {
      throw new Error("Quantiade menor ou igual a zero")
    }

    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.items.push({ product, quantity })
      return true
    }
    return false
  }

  getCart(): CartItem[] {
    return [...this.items]; // Retorna cópia
  }

  // - removeFromCart(productId: number)
  removeFromCart(productId: number): boolean {
    const getId = this.items.findIndex(e => e.product.id === productId)

    if (getId !== -1) {
      this.items.splice(getId, 1)  //Para remover itens com splice() em JavaScript, use array.splice(indiceDeInicio, quantidadeARemover): 
      // forneça o índice do primeiro item a ser excluído e quantos itens remover a partir dali;
      //  ele modifica o array original e retorna os itens removidos
      return true
    }

    return false
  }

  calculateTotal(): number {
    return this.items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  }

  applyDiscount(percentage: number): number{
    const discount = 1 -(percentage / 100 ) 

    return this.calculateTotal() * discount
  }
}


const prod: ProductOOP[] = [
  {
    id: 1,
    name: "Notebook",
    price: 4500,
  },
  {
    id: 2,
    name: "Mouse",
    price: 150,
  },
  {
    id: 3,
    name: "Teclado",
    price: 300,
  },
  {
    id: 4,
    name: "Monitor",
    price: 1200,
  },
];
const cart = new Cart([])

// console.log("=== TESTE 1: Carrinho Com Produto Notebook ===");

// console.log("add um item ao carrinho", cart.addToCart(prod[0], 1));
// console.log(cart.getCart());
// console.log("=== TESTE 1: FIM===");

// console.log("=== TESTE 2: Add e depois deleta===");
// console.log(cart.addToCart(prod[0], 1));
// console.log(cart.getCart());
// console.log(cart.removeFromCart(1))
// console.log("carrinho apos o remove", cart.getCart());
// console.log("=== TESTE 2: FIM===");

console.log("=== TESTE 3: Calcular total em valor de pedidos===");
console.log(cart.addToCart(prod[0], 3));
console.log(cart.calculateTotal());

console.log("=== TESTE 4: Calcular total com desconto===");
console.log(cart.addToCart(prod[0], 3));
console.log(cart.calculateTotal());
console.log(cart.applyDiscount(5));


// 5. Por que passar initialItems no constructor

// Isso resolve um problema real:

// ❌ Sem constructor
// const cart = new Cart();
// cart.addToCart(produto, 2);


// Estado inicial desconhecido.

// ✅ Com constructor
// const cart = new Cart([
//   { product: notebook, quantity: 1 }
// ]);


// Benefícios:

// Rehidratar carrinho (ex: banco, sessão, cache)

// Testes automatizados

// Serverless (Lambda recebe estado pronto)

// Muito comum em backend real.