08-patterns-comuns.md

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
