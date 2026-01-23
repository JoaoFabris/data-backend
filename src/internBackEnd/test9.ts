// 🕒 O Desafio Final (Nível Bônus): O Verificador de Prazos
// O Problema: A BGC precisa verificar quais auditorias estão atrasadas.

// Requisitos:

// Interface: Auditoria com id, cliente e dataVencimento (string no formato ISO: "YYYY-MM-DD").

// Lógica: Compare a dataVencimento com a data atual.

// Filtro: Retorne apenas os nomes dos clientes cujas auditorias já venceram.


interface Auditoria {
    id: number;
    cliente: string;
    dataVencimento: string; // Ex: "2025-05-20"
}

const auditorias: Auditoria[] = [
    { id: 1, cliente: "Banco X", dataVencimento: "2023-10-10" }, // Vencida
    { id: 2, cliente: "Loja Y", dataVencimento: "2026-12-01" },  // No prazo
    { id: 3, cliente: "Tech Z", dataVencimento: "2024-01-01" },  // Vencida
];

function listarAtrasados(lista: Auditoria[]): string[] {
    const hoje = new Date();

    return lista
        .filter(a => {
            const dataVenc = new Date(a.dataVencimento);
            console.log(dataVenc);
            
            return dataVenc < hoje; // Se a data de vencimento é menor que hoje, está atrasado
        })
        .map(a => a.cliente);
}

console.log(listarAtrasados(auditorias)); 
// Esperado: ["Banco X", "Tech Z"] (considerando que hoje é 2025/2026)