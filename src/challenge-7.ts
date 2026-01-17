// 🎯 Desafio 1: API de Gestão de Riscos (Básico)
// Contexto: A BGC trabalha com gestão de riscos. Crie uma API simples para registrar e consultar riscos identificados.
// Requisitos:

// Criar endpoints REST para CRUD de riscos
// Cada risco deve ter: id, título, descricao, nível (baixo/médio/alto), status (aberto/em análise/mitigado), data de criação
// Usar TypeScript + Node.js
// Armazenar dados em memória (array)

// Endpoints esperados:
// POST /risks - Criar novo risco
// GET /risks - Listar todos os riscos
// GET /risks/:id - Buscar risco específico
// PUT /risks/:id - Atualizar risco
// DELETE /risks/:id - Deletar risco
// GET /risks/nivel/:nivel - Filtrar por nível de risco
// Exemplo de payload:
// json{
//   "titulo": "Vulnerabilidade de segurança",
//   "descricao": "Endpoint sem autenticação",
//   "nivel": "alto",
//   "status": "aberto"
// }

///home/fabris/data-backend/src/challenge-7.ts

import express, { Request, Response } from 'express';


type NivelRisco = "baixo" | "médio" | "alto";
type StatusType = "aberto" | "em análise" | "mitigado";

interface RiscoType {
    id: number;
    titulo: string;
    descricao: string;
    nivel: NivelRisco;
    status: StatusType;
    createdAt: Date;
}

const app = express();
app.use(express.json());

let riscos: RiscoType[] = []
let nextId = 1


app.post('/risks', (req: Request, res: Response) => {
    const { titulo, descricao, nivel, status } = req.body

    if (!nivel && !["baixo", "médio", "alto"].includes(nivel)) {
        return res.status(400).json({ error: "nível deve ser do tipo baixo médio alto" })
    }

    if (!status && !["aberto", "em análise", "mitigado"].includes(status)) {
        return res.status(400).json({ error: "statuso deve ser do tipo aberto, em análise, mitigado" })
    }

    if(!titulo){
        return res.status(400).json({ error: "Título precisa estar incluso"})
    }

     if(!descricao){
        return res.status(400).json({ error: "Título precisa estar incluso"})
    }


    const novoRisco: RiscoType = {
        id: nextId++,
        titulo,
        descricao,
        nivel,
        status,
        createdAt: new Date()
    }

    riscos.push(novoRisco)
    res.status(201).json(novoRisco)
})

app.get('/risks', (req: Request, res: Response) => {
    res.status(200).json({ totalRiscos: riscos.length, riscos });
});

app.get('/risks/:id', (req: Request, res: Response,) => {
    const id = Number(req.params.id)
    const risco = riscos.find(r => r.id === id)

    if (!risco) {
        return res.status(404).json({ error: 'Risco não encontrado' })
    }

    res.json(risco)
})

app.put('/risks/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const findbyindex = riscos.findIndex(r => r.id === id);

        if (findbyindex === -1) {
            return res.status(404).json({ error: 'Risco não encontrado' })
        }

        const { titulo, descricao, nivel, status } = req.body

        if (titulo) riscos[findbyindex].titulo = titulo;
        if (descricao) riscos[findbyindex].descricao = descricao;
        if (nivel && ["baixo", "médio", "alto"].includes(nivel)) riscos[findbyindex].nivel = nivel
        else return res.status(400).json({ error: "nível deve ser do tipo baixo médio alto" })
        if (status && ["aberto", "em analise", "mitigado"].includes(status)) riscos[findbyindex].status = status
        else return res.status(400).json({ error: "statuso deve ser do tipo aberto, em análise, mitigado" })

        res.json(riscos[findbyindex])
    } catch (error) {
        res.status(500).json({ error: "Error interno" })
    }
})

app.delete('/risks/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const risco = riscos.findIndex(find => find.id === id)

    console.log(risco); // retorna o valor index na posiçõa do array
    

    if (risco === -1) {
        return res.status(404).json({ error: "Risco não encontrado" })
    }

    riscos.splice(risco, 1)
    res.status(204).json({ message: "Risco deletado" });
})

app.get('/risks/nivel/:nivel', (req: Request, res: Response,) => {
    const nivel = req.params.nivel as NivelRisco
    if (!["baixo", "médio", "alto"].includes(nivel)) {
        return res.status(400).json({ erro: "Nível inválido, nível deve ser do tipo baixo médio alto" })
    }
    const nivelRiscos = riscos.filter(r => r.nivel === nivel)

    res.json(nivelRiscos)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

})

// O método find() retorna o próprio elemento (o valor) que satisfaz a condição especificada.
// O método findIndex() retorna o índice (a posição) do primeiro elemento que satisfaz a condição. 