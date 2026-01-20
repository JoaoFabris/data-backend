# 📚 Guia Resumido Completo - TypeScript para Live Coding

## 📑 Índice dos Arquivos

1. **01-fundamentos-typescript.md** - Tipos, variáveis, operadores
2. **02-estruturas-controle.md** - If/else, loops
3. **03-arrays-metodos.md** - Manipulação de arrays
4. **04-strings-manipulacao.md** - Trabalhar com strings
5. **05-objetos-interfaces.md** - Objetos e tipos complexos
6. **06-funcoes-avancado.md** - Arrow functions, callbacks
7. **07-algoritmos-classicos.md** - Sort, search, fibonacci, etc
8. **08-patterns-comuns.md** - Padrões que sempre caem
9. **09-dicas-live-coding.md** - Como se comportar no teste
10. **10-cheatsheet.md** - Cola rápida de sintaxe

---

# 📄 01-fundamentos-typescript.md

## Tipos Básicos

```typescript
// Tipos primitivos
let numero: number = 42;
let texto: string = "Hello";
let ativo: boolean = true;
let qualquerCoisa: any = "pode ser qualquer tipo";

// Arrays
let numeros: number[] = [1, 2, 3];
let palavras: Array<string> = ["a", "b", "c"];

// Tuple (array com tipos fixos)
let pessoa: [string, number] = ["João", 25];
```

## Declaração de Variáveis

```typescript
// const - não pode reatribuir (use sempre que possível)
const PI = 3.14159;

// let - pode reatribuir (use quando necessário)
let contador = 0;
contador = 1; // OK

// var - evite usar (escopo antigo)
```

## Operadores

```typescript
// Aritméticos
+ - * / %         // Soma, subtração, multiplicação, divisão, módulo
10 % 3            // 1 (resto da divisão)

// Comparação
=== !== > < >= <= // Sempre use === (não ==)

// Lógicos
&& || !           // E, OU, NÃO
true && false     // false
true || false     // true
!true             // false

// Ternário
const resultado = idade >= 18 ? "adulto" : "menor";
```

## Template Strings

```typescript
const nome = "João";
const idade = 25;

// Concatenação antiga (evite)
const msg1 = "Olá, " + nome + "! Você tem " + idade + " anos.";

// Template string (use sempre)
const msg2 = `Olá, ${nome}! Você tem ${idade} anos.`;

// Multilinhas
const html = `
  <div>
    <h1>${nome}</h1>
    <p>Idade: ${idade}</p>
  </div>
`;
```

---

# 📄 02-estruturas-controle.md

## If / Else

```typescript
// Básico
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Com else if
if (nota >= 9) {
  console.log("A");
} else if (nota >= 7) {
  console.log("B");
} else if (nota >= 5) {
  console.log("C");
} else {
  console.log("Reprovado");
}

// Operador ternário (para casos simples)
const status = idade >= 18 ? "adulto" : "menor";

// Guard clauses (melhor prática)
function processar(valor: number): string {
  if (valor < 0) return "Valor inválido";
  if (valor === 0) return "Zero";
  
  // Lógica principal aqui
  return "Valor processado";
}
```

## Switch

```typescript
switch (diaSemana) {
  case 0:
  case 6:
    console.log("Final de semana");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Dia útil");
    break;
  default:
    console.log("Dia inválido");
}
```

## For Loop

```typescript
// For tradicional
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// For decrescente
for (let i = 5; i > 0; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}

// For com passo diferente
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

// For percorrendo array (por índice)
const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// For...of (percorre valores)
for (const num of nums) {
  console.log(num);
}

// For...in (percorre índices/chaves) - raramente usado
for (const index in nums) {
  console.log(index); // "0", "1", "2" (strings!)
}
```

## While / Do While

```typescript
// While (pode não executar)
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do While (executa pelo menos 1x)
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// While com condição complexa
let tentativas = 0;
let sucesso = false;
while (tentativas < 3 && !sucesso) {
  sucesso = tentarOperacao();
  tentativas++;
}
```

## Break e Continue

```typescript
// Break (sai do loop)
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// Continue (pula iteração)
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}
```

---

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

# 📄 04-strings-manipulacao.md

## Propriedades Básicas

```typescript
const texto = "Hello World";

texto.length         // 11
texto[0]             // "H"
texto[texto.length - 1]  // "d"
```

## Métodos de Busca

```typescript
const frase = "JavaScript é incrível";

// includes - verifica se contém
frase.includes("Java");      // true
frase.includes("Python");    // false

// indexOf - posição da primeira ocorrência
frase.indexOf("Script");     // 4
frase.indexOf("xyz");        // -1 (não encontrado)

// startsWith / endsWith
frase.startsWith("Java");    // true
frase.endsWith("vel");       // true

// search - busca com regex
frase.search(/incrível/);    // 14
```

## Métodos de Extração

```typescript
const texto = "JavaScript";

// slice - extrai parte
texto.slice(0, 4);           // "Java"
texto.slice(4);              // "Script"
texto.slice(-6);             // "Script" (do fim)

// substring - similar ao slice
texto.substring(0, 4);       // "Java"

// charAt - pega caractere
texto.charAt(0);             // "J"

// split - divide em array
"a,b,c".split(",");          // ["a", "b", "c"]
"hello".split("");           // ["h", "e", "l", "l", "o"]
```

## Métodos de Transformação

```typescript
const texto = "  JavaScript  ";

// toLowerCase / toUpperCase
texto.toLowerCase();         // "  javascript  "
texto.toUpperCase();         // "  JAVASCRIPT  "

// trim - remove espaços
texto.trim();                // "JavaScript"
texto.trimStart();           // "JavaScript  "
texto.trimEnd();             // "  JavaScript"

// replace - substitui
"hello world".replace("world", "JS");  // "hello JS"
"aaa".replace("a", "b");     // "baa" (apenas primeira)
"aaa".replaceAll("a", "b");  // "bbb" (todas)

// repeat - repete string
"ha".repeat(3);              // "hahaha"

// padStart / padEnd - preenche
"5".padStart(3, "0");        // "005"
"5".padEnd(3, "0");          // "500"
```

## Template Strings

```typescript
const nome = "João";
const idade = 25;

// Interpolação
const msg = `${nome} tem ${idade} anos`;

// Expressões
const resultado = `A soma é: ${10 + 20}`;

// Multilinhas
const html = `
  <div>
    <h1>${nome}</h1>
  </div>
`;
```

## Patterns Comuns

```typescript
// Contar vogais
function contarVogais(texto: string): number {
  const vogais = "aeiouAEIOU";
  let count = 0;
  for (const char of texto) {
    if (vogais.includes(char)) count++;
  }
  return count;
}

// Verificar palíndromo
function isPalindromo(texto: string): boolean {
  const limpo = texto.toLowerCase().replace(/\s/g, "");
  return limpo === limpo.split("").reverse().join("");
}

// Inverter string
function inverter(texto: string): string {
  return texto.split("").reverse().join("");
}

// Capitalizar primeira letra
function capitalize(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Contar palavras
function contarPalavras(texto: string): number {
  return texto.trim().split(/\s+/).length;
}
```

---

# 📄 05-objetos-interfaces.md

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

# 📄 06-funcoes-avancado.md

## Declarações de Função

```typescript
// Function declaration
function somar(a: number, b: number): number {
  return a + b;
}

// Function expression
const multiplicar = function(a: number, b: number): number {
  return a * b;
};

// Arrow function
const dividir = (a: number, b: number): number => {
  return a / b;
};

// Arrow function simplificada (uma linha)
const dobro = (n: number): number => n * 2;

// Arrow function sem parâmetros
const saudar = (): string => "Olá!";

// Arrow function com um parâmetro (sem parênteses)
const quadrado = (n: number): number => n * n;
```

## Parâmetros

```typescript
// Parâmetros opcionais
function criar(nome: string, idade?: number) {
  // idade pode ser undefined
}

// Parâmetros com valor padrão
function saudar(nome: string = "Visitante") {
  return `Olá, ${nome}!`;
}

// Rest parameters (múltiplos argumentos)
function somar(...numeros: number[]): number {
  return numeros.reduce((a, b) => a + b, 0);
}

somar(1, 2, 3, 4, 5);  // 15
```

## Callbacks

```typescript
// Função que recebe callback
function processar(
  valor: number,
  callback: (resultado: number) => void
) {
  const resultado = valor * 2;
  callback(resultado);
}

// Usar
processar(10, (resultado) => {
  console.log(resultado);  // 20
});

// Array methods usam callbacks
const nums = [1, 2, 3, 4, 5];
nums.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});
```

## Higher-Order Functions

```typescript
// Função que retorna função
function multiplicador(fator: number) {
  return (numero: number) => numero * fator;
}

const dobrar = multiplicador(2);
const triplicar = multiplicador(3);

dobrar(5);     // 10
triplicar(5);  // 15

// Função que recebe e retorna função
function compose(f: Function, g: Function) {
  return (x: any) => f(g(x));
}
```

## Recursão

```typescript
// Fatorial
function fatorial(n: number): number {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

// Fibonacci
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Soma de array (recursivo)
function somaRecursiva(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + somaRecursiva(arr.slice(1));
}
```

## Type Guards

```typescript
// Verificar tipo
function processar(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor * 2;
  }
}

// Verificar se é array
if (Array.isArray(variavel)) {
  // é array
}

// Verificar undefined/null
if (variavel !== undefined && variavel !== null) {
  // existe
}
```

---

# 📄 07-algoritmos-classicos.md

## Busca Linear

```typescript
function buscaLinear(arr: number[], alvo: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      return i;  // Retorna índice
    }
  }
  return -1;  // Não encontrado
}

// Complexidade: O(n)
```

## Busca Binária

```typescript
function buscaBinaria(arr: number[], alvo: number): number {
  let inicio = 0;
  let fim = arr.length - 1;
  
  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    
    if (arr[meio] === alvo) {
      return meio;
    } else if (arr[meio] < alvo) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  
  return -1;
}

// Complexidade: O(log n)
// REQUER array ordenado!
```

## Bubble Sort

```typescript
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  const resultado = [...arr];  // Cópia
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        // Trocar
        [resultado[j], resultado[j + 1]] = [resultado[j + 1], resultado[j]];
      }
    }
  }
  
  return resultado;
}

// Complexidade: O(n²)
```

## Selection Sort

```typescript
function selectionSort(arr: number[]): number[] {
  const resultado = [...arr];
  const n = resultado.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    // Encontrar menor elemento
    for (let j = i + 1; j < n; j++) {
      if (resultado[j] < resultado[minIdx]) {
        minIdx = j;
      }
    }
    
    // Trocar
    if (minIdx !== i) {
      [resultado[i], resultado[minIdx]] = [resultado[minIdx], resultado[i]];
    }
  }
  
  return resultado;
}

// Complexidade: O(n²)
```

## Fibonacci (Iterativo)

```typescript
function fibonacci(n: number): number {
  if (n <= 1) return n;
  
  let prev = 0;
  let current = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
}

// Complexidade: O(n)
```

## Fatorial

```typescript
// Iterativo
function fatorial(n: number): number {
  if (n <= 1) return 1;
  
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

// Recursivo
function fatorialRecursivo(n: number): number {
  if (n <= 1) return 1;
  return n * fatorialRecursivo(n - 1);
}

// Complexidade: O(n)
```

## Número Primo

```typescript
function isPrimo(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  // Testar apenas até raiz quadrada
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

// Complexidade: O(√n)
```

## Remover Duplicatas

```typescript
// Usando Set (mais fácil)
function removerDuplicatas(arr: number[]): number[] {
  return [...new Set(arr)];
}

// Manual (sem Set)
function removerDuplicatasManual(arr: number[]): number[] {
  const resultado: number[] = [];
  
  for (const item of arr) {
    if (!resultado.includes(item)) {
      resultado.push(item);
    }
  }
  
  return resultado;
}
```

## Inverter Array/String

```typescript
// Array
function inverterArray<T>(arr: T[]): T[] {
  return arr.reverse();  // Modifica original
  // ou
  return [...arr].reverse();  // Não modifica
}

// String
function inverterString(str: string): string {
  return str.split("").reverse().join("");
}
```

---

# 📄 08-patterns-comuns.md

## 1. Filtrar e Transformar

```typescript
// Problema: Pegar apenas números pares e dobrar
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros
  .filter(n => n % 2 === 0)  // [2, 4, 6]
  .map(n => n * 2);          // [4, 8, 12]
```

## 2. Contar Ocorrências

```typescript
function contarOcorrencias(arr: string[]): Record<string, number> {
  const contagem: Record<string, number> = {};
  
  for (const item of arr) {
    contagem[item] = (contagem[item] || 0) + 1;
  }
  
  return contagem;
}

// ["a", "b", "a", "c"] → { a: 2, b: 1, c: 1 }
```

## 3. Agrupar Por Propriedade

```typescript
interface Produto {
  nome: string;
  categoria: string;
}

function agruparPorCategoria(
  produtos: Produto[]
): Record<string, Produto[]> {
  const grupos: Record<string, Produto[]> = {};
  
  for (const produto of produtos) {
    const cat = produto.categoria;
    
    if (!grupos[cat]) {
      grupos[cat] = [];
    }
    
    grupos[cat].push(produto);
  }
  
  return grupos;
}
```

## 4. Encontrar Maior/Menor

```typescript
function encontrarMaior(arr: number[]): number {
  if (arr.length === 0) throw new Error("Array vazio");
  
  let maior = arr[0];
  for (const num of arr) {
    if (num > maior) maior = num;
  }
  return maior;
}

// Ou usando Math
function encontrarMaiorMath(arr: number[]): number {
  return Math.max(...arr);
}
```

## 5. Somar Propriedades

```typescript
interface Item {
  preco: number;
}

function somarPrecos(items: Item[]): number {
  return items.reduce((total, item) => total + item.preco, 0);
}
```

## 6. Validar Todos/Algum

```typescript
// Verificar se todos são positivos
function todoPositivos(numeros: number[]): boolean {
  return numeros.every(n => n > 0);
}

// Verificar se algum é negativo
function temNegativo(numeros: number[]): boolean {
  return numeros.some(n => n < 0);
}
```

## 7. Achatar Array Aninhado

```typescript
// Um nível
function achatar(arr: number[][]): number[] {
  return arr.flat();
  // ou
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

// Múltiplos níveis
function achatarCompleto(arr: any