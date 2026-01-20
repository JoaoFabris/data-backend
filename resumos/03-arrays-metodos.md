# 📄 03-arrays-metodos.md

## Criação e Acesso

```typescript
// Criar arrays
const vazio: number[] = [];
const numeros = [1, 2, 3, 4, 5];
const misto = [1, "texto", true]; // any[]

// Acessar elementos
numeros[0]           // 1 (primeiro)
numeros[numeros.length - 1]  // 5 (último)

// Propriedades
numeros.length       // 5
```

## Métodos de Modificação

```typescript
const arr = [1, 2, 3];

// Adicionar
arr.push(4);         // [1, 2, 3, 4] - adiciona no final
arr.unshift(0);      // [0, 1, 2, 3, 4] - adiciona no início

// Remover
arr.pop();           // Remove último → [0, 1, 2, 3]
arr.shift();         // Remove primeiro → [1, 2, 3]

// Splice (remover/adicionar no meio)
arr.splice(1, 1);    // Remove 1 elemento na posição 1 → [1, 3]
arr.splice(1, 0, 2); // Adiciona 2 na posição 1 → [1, 2, 3]
```

## Métodos de Busca

```typescript
const nums = [10, 20, 30, 40, 50];

// includes - verifica se existe
nums.includes(30);   // true
nums.includes(99);   // false

// indexOf - retorna índice ou -1
nums.indexOf(30);    // 2
nums.indexOf(99);    // -1

// find - retorna primeiro elemento que satisfaz condição
nums.find(n => n > 25);  // 30

// findIndex - retorna índice
nums.findIndex(n => n > 25);  // 2

// some - verifica se ALGUM satisfaz
nums.some(n => n > 40);  // true

// every - verifica se TODOS satisfazem
nums.every(n => n > 0);  // true
```

## Métodos de Transformação

```typescript
const nums = [1, 2, 3, 4, 5];

// map - transforma cada elemento
const dobro = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - filtra elementos
const pares = nums.filter(n => n % 2 === 0);
// [2, 4]

// reduce - reduz a um único valor
const soma = nums.reduce((acc, n) => acc + n, 0);
// 15

// Encadeamento
const resultado = nums
  .filter(n => n > 2)    // [3, 4, 5]
  .map(n => n * 2)       // [6, 8, 10]
  .reduce((a, b) => a + b, 0);  // 24
```

## Métodos de Ordenação

```typescript
const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// sort - ordena (MODIFICA o array original!)
nums.sort((a, b) => a - b);  // Crescente: [1, 1, 2, 3, 4, 5, 6, 9]
nums.sort((a, b) => b - a);  // Decrescente: [9, 6, 5, 4, 3, 2, 1, 1]

// reverse - inverte
nums.reverse();  // [1, 1, 2, 3, 4, 5, 6, 9] → [9, 6, 5, 4, 3, 2, 1, 1]

// Ordenar strings
const nomes = ["Carlos", "Ana", "Bruno"];
nomes.sort();  // ["Ana", "Bruno", "Carlos"]
```

## Outros Métodos Úteis

```typescript
const arr = [1, 2, 3];

// join - transforma em string
arr.join(", ");      // "1, 2, 3"

// slice - copia parte do array (não modifica original)
arr.slice(0, 2);     // [1, 2]
arr.slice(1);        // [2, 3]

// concat - junta arrays
const arr2 = [4, 5];
arr.concat(arr2);    // [1, 2, 3, 4, 5]

// Spread operator (moderno)
const junto = [...arr, ...arr2];  // [1, 2, 3, 4, 5]

// flat - achata arrays aninhados
const aninhado = [1, [2, 3], [4, [5]]];
aninhado.flat();     // [1, 2, 3, 4, [5]]
aninhado.flat(2);    // [1, 2, 3, 4, 5]
```

---