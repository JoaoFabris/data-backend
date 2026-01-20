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