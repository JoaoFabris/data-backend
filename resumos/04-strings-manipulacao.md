📄 04-strings-manipulacao.md

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
