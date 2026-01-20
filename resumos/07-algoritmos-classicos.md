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