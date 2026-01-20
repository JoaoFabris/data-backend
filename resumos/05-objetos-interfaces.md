## Criação de Objetos

```typescript
// Objeto literal
const pessoa = {
  nome: "João",
  idade: 25,
  ativo: true
};

// Acessar propriedades
pessoa.nome           // "João"
pessoa["idade"]       // 25

// Adicionar propriedade
pessoa.email = "joao@email.com";

// Deletar propriedade
delete pessoa.ativo;
```

## Interfaces

```typescript
// Definir estrutura
interface Usuario {
  id: number;
  nome: string;
  email: string;
  idade?: number;        // Opcional
  readonly cpf: string;  // Somente leitura
}

// Usar interface
const user: Usuario = {
  id: 1,
  nome: "Maria",
  email: "maria@email.com",
  cpf: "123.456.789-00"
};

// Erro: cpf é readonly
// user.cpf = "000.000.000-00";
```

## Arrays de Objetos

```typescript
interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

const produtos: Produto[] = [
  { id: 1, nome: "Mouse", preco: 50, estoque: 10 },
  { id: 2, nome: "Teclado", preco: 150, estoque: 5 },
  { id: 3, nome: "Monitor", preco: 800, estoque: 2 }
];

// Filtrar produtos caros
const caros = produtos.filter(p => p.preco > 100);

// Somar total em estoque
const totalEstoque = produtos.reduce((sum, p) => sum + p.estoque, 0);

// Pegar apenas nomes
const nomes = produtos.map(p => p.nome);

// Encontrar produto específico
const mouse = produtos.find(p => p.nome === "Mouse");
```

## Record Type

```typescript
// Objeto dinâmico
const contagem: Record<string, number> = {};
contagem["maçã"] = 3;
contagem["banana"] = 2;

// Equivalente a:
const contagem2: { [key: string]: number } = {};
```

## Métodos de Objeto

```typescript
const pessoa = {
  nome: "João",
  idade: 25,
  saudar() {
    return `Olá, meu nome é ${this.nome}`;
  }
};

// Object.keys - retorna chaves
Object.keys(pessoa);     // ["nome", "idade", "saudar"]

// Object.values - retorna valores
Object.values(pessoa);   // ["João", 25, function]

// Object.entries - retorna pares [chave, valor]
Object.entries(pessoa);  // [["nome", "João"], ["idade", 25], ...]

// Iterar sobre objeto
for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}
```

## Destructuring

```typescript
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo"
};

// Extrair propriedades
const { nome, idade } = pessoa;
console.log(nome);  // "João"

// Com renomeação
const { nome: nomeCompleto } = pessoa;

// Com valor padrão
const { email = "sem@email.com" } = pessoa;

// Destructuring em parâmetros
function saudar({ nome, idade }: { nome: string, idade: number }) {
  return `${nome} tem ${idade} anos`;
}
```

## Spread Operator

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Juntar objetos
const junto = { ...obj1, ...obj2 };
// { a: 1, b: 2, c: 3, d: 4 }

// Copiar e modificar
const copia = { ...obj1, b: 99 };
// { a: 1, b: 99 }

// Adicionar propriedade
const completo = { ...obj1, e: 5 };
// { a: 1, b: 2, e: 5 }
```

---