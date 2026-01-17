# Uso de try/catch em Live Coding (Resumo Prático)

## É recomendado usar try/catch neste caso?

**Não.**
Para funções simples e determinísticas, como cálculo de média (`calculateAverageGrade`), o uso de `try/catch` **não é recomendado**.

Motivos:

* Não há operações que lançam exceções nativamente.
* Erros previsíveis (array vazio, valores inválidos) devem ser tratados com **condições (`if`)**.
* `try/catch` não corrige erro de lógica, apenas captura exceções.

Exemplo recomendado:

```ts
function calculateAverageGrade(students: Student[]): number {
  if (students.length === 0) return 0;

  const sum = students.reduce((acc, curr) => acc + curr.grade, 0);
  return sum / students.length;
}
```

---

## Quando o try/catch é recomendado?

### 1. Operações assíncronas (uso mais comum)

* Requisições HTTP
* Acesso a APIs externas
* Banco de dados

```ts
try {
  const response = await fetch(url);
  const data = await response.json();
} catch (error) {
  // falha externa ou imprevisível
}
```

---

### 2. Funções que lançam exceções nativamente

Exemplos:

* `JSON.parse`
* Bibliotecas de terceiros
* Parsing complexo

```ts
try {
  const obj = JSON.parse(input);
} catch {
  // JSON inválido
}
```

---

### 3. Camadas de fronteira do sistema

Muito comum em:

* Controllers
* Services
* Handlers de API
* Middlewares

Objetivo: **centralizar tratamento de erro**.

---

### 4. Quando erros são lançados intencionalmente

```ts
if (grade < 0 || grade > 100) {
  throw new Error("Nota inválida");
}
```

Nesse caso, faz sentido capturar o erro em um nível acima.

---

## Regra prática para live coding

> **Use `if` para o previsível.
> Use `try/catch` para o inesperado.**

---

## Resposta madura para entrevistas

> “Evito usar `try/catch` em funções puras e simples. Prefiro validações diretas. Uso `try/catch` em operações assíncronas, chamadas externas ou quando preciso capturar exceções reais.”

Esse posicionamento demonstra **bom senso técnico e maturidade**.
