📄 01-fundamentos-typescript.md

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