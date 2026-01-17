# Guia Rápido: Complexidade de Algoritmos (Big O)

Este resumo explica como a estrutura do código afeta a performance.

## 1. IF dentro de FOR
**Complexidade: O(n) - Linear**
O `if` é uma operação simples (tempo constante). O tempo total cresce na mesma proporção que o tamanho da entrada.
*   **Exemplo:** Procurar um item em uma lista ou o seu código original de número primo.

## 2. FOR dentro de FOR
**Complexidade: O(n²) - Quadrática**
As iterações se multiplicam. Para cada volta do laço externo, o interno roda o ciclo completo.
*   **Exemplo:** Comparar cada elemento de uma lista com todos os outros. Evite para grandes volumes de dados.

## 3. Otimização (Raiz Quadrada)
**Complexidade: O(√n) - Sublinear**
Ao limitar o laço à raiz quadrada (`Math.sqrt(n)`), o número de operações cai drasticamente.
*   **Exemplo:** Verificação de números primos otimizada.

---

### Tabela de Comparação (Tempo de Processamento)

| Estrutura | Notação | Performance |
| :--- | :--- | :--- |
| Operação Simples (`if`, atribuição) | O(1) | Excelente |
| Laço único (`for`) | O(n) | Boa |
| Laço até raiz quadrada | O(√n) | Muito Boa |
| Dois laços aninhados (`for` + `for`) | O(n²) | Ruim para dados grandes |

---
**Dica de VS Code:** Para ver este arquivo formatado, aperte `Ctrl + Shift + V` no Windows/Linux ou `Cmd + Shift + V` no Mac.
