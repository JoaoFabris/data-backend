/*
categorizar riscos por severidade.
Dado um array de riscos, implemente as seguintes funções:
*/

interface Risk {
    id: number;
    name: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    probability: number; // 0-100
    impact: number; // 0-100
}

interface RiskWithScore extends Risk {
    calculateScore: number;
}

const risks: Risk[] = [
    { id: 1, name: "Risco de Crédito", severity: "high", probability: 75, impact: 85 },
    { id: 2, name: "Risco Operacional", severity: "medium", probability: 40, impact: 60 },
    { id: 3, name: "Risco de Mercado", severity: "critical", probability: 90, impact: 95 },
    { id: 4, name: "Risco de Liquidez", severity: "low", probability: 20, impact: 30 }
];

// TODO: Implementar as funções abaixo

// 1. Filtrar riscos por severidade
function filterBySeverity(risks: Risk[], severity: string): Risk[] {
    const filteredRisk = risks.filter(risk => risk.severity === severity)
    return filteredRisk
}

// 2. Calcular score de risco (probability * impact / 100)
function calculateRiskScore(risks: Risk[]): RiskWithScore[] {
    return risks.map(risk => {
        const calculateScore = (risk.probability * risk.impact) / 100;

        return {
            ...risk,
            calculateScore
        }
    });
}


// 3. Ordenar riscos por score (maior para menor)
function sortByRiskScore(risks: Risk[]): RiskWithScore[] {
    const risksWithScore = calculateRiskScore(risks);

    // ordenar de MAIOR para MENOR (b - a)
    return risksWithScore.sort((a, b) => b.calculateScore - a.calculateScore);
}
// 4. Obter estatísticas gerais
function getRiskStatistics(risks: Risk[]) {
    // Retornar: total de riscos, média de probabilidade, média de impacto

    const totalRisk = risks.length

    const sumProbality = risks.reduce((acc, risk) => acc + risk.probability, 0)
    const averageProbality = sumProbality / totalRisk;

    const sumImpact = risks.reduce((acc, risk) => acc + risk.impact, 0)
    const averageImpact = sumImpact / totalRisk
    return {
        totalRisk,
        averageProbality,
        averageImpact
    }
}

console.log('=======Retorno do FilterByRisk=======');
const returnRiskCritical = filterBySeverity(risks, 'critical')
console.log(returnRiskCritical);
const returnRiskMedium = filterBySeverity(risks, 'medium')
console.log(returnRiskMedium);

console.log('=======Retorno do calculateRiskScore========');
const returncCalculateRiskScore = calculateRiskScore(risks)
console.log(returncCalculateRiskScore);

console.log('=======Retorno do sortByRiskScore========');
const returncSortByRiskScore = sortByRiskScore(risks)
console.log(returncSortByRiskScore);

console.log('=======Retorno do getRiskStatistics========');
const returncGetRiskStatistics = getRiskStatistics(risks)
console.log(returncGetRiskStatistics);
