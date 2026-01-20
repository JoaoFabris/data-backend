📄 06-funcoes-avancado.md

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