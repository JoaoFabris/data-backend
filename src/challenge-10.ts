// 🎯 Desafio 4: API com Validação de Dados
// Contexto: Criar endpoint que valida dados antes de processar.
// Requisitos:

// Endpoint para cadastro de cliente
// Validar campos obrigatórios
// Validar formato de email
// Validar CPF (formato básico: 000.000.000-00)
// Retornar mensagens de erro claras

// Validações:
// typescriptinterface Cliente {
//   nome: string; // obrigatório, min 3 caracteres
//   email: string; // obrigatório, formato válido
//   cpf: string; // obrigatório, formato válido
//   telefone: string; // opcional
//   dataNascimento: string; // obrigatório, maior de 18 anos
// }
// Endpoint:
// POST /clientes - Cadastrar cliente com validações


// Código,Analogia do Restaurante
// const app = express(),Você acabou de abrir a empresa do restaurante.
// app.use(express.json()),É o garçom que traduz o pedido do cliente para a cozinha entender.
// app.listen(PORT),Você abriu a porta da frente e os clientes já podem entrar.

//npm run dev src/challenge-10.ts


import express, { Request, Response } from 'express'
const app = express()
import crypto from 'crypto' //random number

const PORT = 3002

app.use(express.json())
//padrão, o Node.js não sabe ler o corpo (body) de uma requisição que chega em formato JSON
//Essa linha diz ao Express: "Ei, toda vez que chegar uma requisição, olhe se é JSON. Se for, transforme em um objeto JavaScript para que eu possa usar facilmente."


const MIN_AGE = 18
const MIN_CHAR_NAME = 3
const REGEX = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    birthday: /^\d{4}-\d{2}-\d{2}$/,
    telephone: /^\d{2}\s9\d{4}-\d{4}$/,
}



type Client = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    telephone?: string;
    birthday: string
    age: number;
}

interface ValidationError {
    field: string;
    message: string;
}

interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}

const clients: Client[] = []

// ============ FUNC AND SANITIZE

function isValidDate(dateToString: string): boolean {
    const date = new Date(dateToString)
    if (!REGEX.birthday.test(dateToString)) {
        return false
    }
    return (!isNaN(date.getTime()) && date.toISOString().startsWith(dateToString))
}

function calculateAge(birthday: string): number {
    const dateToday = new Date()
    const birthdayToday = new Date(birthday)

    let calculateAge = dateToday.getFullYear() - birthdayToday.getFullYear()

    return calculateAge
}

function sanitizeName(name: string): string {
    return name.trim().replace(/\s+/g, ' '); //Substitui qualquer sequência de espaços em branco (espaço, tab, quebra de linha) por um único espaço.
    // trim()Remove espaços em branco no início e no fim da string.
}

function sanitizeEmail(email: string): string {
    return email.trim()
}


function sanitizeCPF(cpf: string): string {
    return cpf.trim();
}

// =========================== VALIDATE

function validateName(name: string): ValidationError | null {
    if (name.length < MIN_CHAR_NAME || name.trim() === '') {
        return { field: ' name', message: ' Name is required' }
    }
    if (name.trim().length < MIN_CHAR_NAME) {
        return { field: 'name', message: `Name must have at least ${MIN_CHAR_NAME}` }
    }
    return null
}

function validateEmail(email: string): ValidationError | null {
    if (email.trim().length === 0 || email.trim() === '') {
        return { field: 'email', message: 'email is required' }
    }
    if (!REGEX.email.test(email)) {
        return { field: 'email', message: 'email should be ===> test@email.com' }
    }
    const findEmail = clients.find(e => e.email.toLowerCase() === email.toLowerCase())
    if (findEmail) {
        return { field: 'email', message: 'email already register' }
    }

    return null
}

function validateTelephone(telephone: string): ValidationError | null {
    if (!REGEX.telephone.test(telephone)) {
        return { field: 'telephone', message: 'telephone shoud be ===> 11 97777-7777' }
    }

    return null
}

function validateCpf(cpf: string): ValidationError | null {
    if (cpf.trim().length === 0 || cpf.trim() === '') {
        return {
            field: 'cpf',
            message: 'CPF is required'
        }
    }
    if (!REGEX.cpf.test(cpf)) {
        return {
            field: 'cpf',
            message: 'CPF should have this format: 000.000.000-00'
        }
    }
    const findCpf = clients.find(c => c.cpf === cpf)
    if (findCpf) {
        return {
            field: 'cpf',
            message: 'cpf already register'
        }
    }

    return null
}

function validateBirthday(birthday: string): ValidationError | null {
    if (birthday.trim().length === 0 || !birthday) {
        return {
            field: 'birthday',
            message: "birthday is required"
        }
    }
    if (!isValidDate(birthday)) {
        return {
            field: 'birthday',
            message: "birthday must be a valid ISO date (YYYY-MM-DD)"
        }
    }

    const getDateToday = new Date()
    const getDateBirthdayClient = new Date(birthday)

    let calculateAge = getDateToday.getFullYear() - getDateBirthdayClient.getFullYear()

    if (getDateToday.getMonth() < getDateBirthdayClient.getMonth() || getDateToday.getMonth() === getDateBirthdayClient.getMonth() && getDateToday.getDate() < getDateBirthdayClient.getDate()) {
        calculateAge-- // aqui a gente verifica se o client ja fez aniversario no ano, sen, reduzimos a idade dele
    }
    if (calculateAge < MIN_AGE) {
        return { field: 'birthday', message: `Must be at least ${MIN_AGE} years old` }
    }
    return null
}


// =========================== VALIDATE CLIENT

function validateClientData(clientData: Client): ValidationResult {
    const errors: ValidationError[] = []
    const { name, email, cpf, birthday, telephone } = clientData

    const nameError = validateName(name)
    if (nameError) {
        errors.push(nameError)
    }
    const birthdayError = validateBirthday(birthday)
    if (birthdayError) {
        errors.push(birthdayError)
    }
    const cpfError = validateCpf(cpf)
    if (cpfError) {
        errors.push(cpfError)
    }
    const emailError = validateEmail(email)
    if (emailError) {
        errors.push(emailError)
    }
    if (telephone) {
        const telephoneError = validateTelephone(telephone)
        if (telephoneError) {
            errors.push(telephoneError)
        }
    }
    return {
        valid: errors.length === 0, // n deveria ser retorno false?
        errors
    }


}

// =========================== ENDPOINTS

app.post('/clients', (req: Request, res: Response) => {
    try {
        const validation: ValidationResult = validateClientData(req.body)
        if (!validation.valid) {
            return res.status(400).json({ messegae: "Error validation", erros: validation.errors })
        }

        const { name, email, cpf, birthday, telephone } = req.body
        const newClient: Client = {
            id: crypto.randomUUID(),
            name: sanitizeName(name),
            email: sanitizeEmail(email),
            cpf: sanitizeCPF(cpf),
            telephone: telephone?.trim(),
            birthday: birthday,
            age: calculateAge(birthday)
        }

        clients.push(newClient)
        return res.status(201).json({ message: 'New client added', client: newClient })

    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
})
app.get('/clients', (req: Request, res: Response) => {
    try {
        return res.status(200).json({ clients: clients })
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
})

app.get('/clients/:id', (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const findClientId = clients.find(i => i.id === id)
        if (!findClientId) {
            return res.status(404).json({ message: " Client not found", id: id })
        }

        return res.status(200).json({ client: findClientId })
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
})

app.delete('/clients/:id', (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const findClientId = clients.findIndex(i => i.id === id)
        if (findClientId === -1) { // findByIndex retoorna -1 quando n encontra
            return res.status(404).json({ message: " Client not found", id: id })
        }

        // const newClients = clients.filter(r => r.id !== id)  // soft delete ou active = false

        clients.splice(findClientId, 1) // deleta permanentemente

        return res.status(200).json({ message: 'client successfully deleted', clients: clients })
    } catch (error) {

    }
})

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));




//   if (name.length < MIN_CHAR_NAME) {
//             return res.status(400).json({ message: "Name must be at least 3 characters" })
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//         const findEmail = clients.find(e => e.email === email)
//         if (findEmail) {
//             return res.status(409).json({ message: "email already exists" })
//         }
//         if (!emailRegex.test(email)) {
//             return res.status(400).json({ message: "email invalid format" })
//         }

//         const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
//         const findCpf = clients.find(c => c.cpf === cpf)
//         if (findCpf) {
//             return res.status(409).json({ message: "cpf already exists" })
//         }
//         if (!cpfRegex.test(cpf)) {
//             return res.status(400).json({ message: "cpf invalid format" });
//         }

//         if (!isValidDate(birthday)) {
//             return res.status(400).json({ message: "birthday must be a valid ISO date (YYYY-MM-DD) " })
//         }
//         const dateBirthday = new Date(birthday);
//         const dateToday = new Date();

//         let calcuteBirthdate = dateToday.getFullYear() - dateBirthday.getFullYear()

//         if (dateToday.getMonth() < dateBirthday.getMonth() || dateToday.getMonth() === dateBirthday.getMonth() && dateToday.getDate() < dateBirthday.getDate()) {
//             calcuteBirthdate--
//         }

//         if (calcuteBirthdate < MIN_AGE) {
//             return res.status(400).json({ message: "less then 18 years old" })
//         }

//         const newClient: Client = {
//             id: crypto.randomUUID(), //verificar se existe uma possiblidade do id ser igual e ter q validar
//             name,
//             email,
//             cpf,
//             telephone,
//             birthday,
//         }
