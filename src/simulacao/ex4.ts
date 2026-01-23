// 🧪 EXERCÍCIO 4 — VALIDAÇÃO DE PAYLOAD (backend style)

// 📌 Esse tipo cai MUITO para estágio/júnior backend, especialmente Node + TS.

// 🧠 Contexto (como o avaliador falaria)

// “Agora imagina que isso é o body de uma requisição HTTP.
// Queremos validar antes de salvar.”

// 📌 Enunciado

// Crie uma função que receba um objeto de usuário e retorne:

// true → se o payload for válido

// false → se for inválido

// Payload esperado:
// {
//   name: string,      // obrigatório, mínimo 3 caracteres
//   email: string,     // obrigatório, deve conter "@"
//   age: number        // opcional, se existir deve ser >= 18
// }

// Exemplos:
// validateUser({ name: "Ana", email: "ana@email.com", age: 22 }) // true
// validateUser({ name: "Jo", email: "jo@email.com" })           // false (nome curto)
// validateUser({ name: "Maria", email: "mariaemail.com" })      // false (email inválido)
// validateUser({ name: "Carlos", email: "c@c.com", age: 16 })   // false (idade)
// validateUser({ name: "Pedro", email: "p@p.com" })             // true

//============= PSEUDOCODIGO
//------ validar nome ------
//funcao ValidateName(name)
//  se name não existir e for menor  a 3
//  retorna false
// retorna true
//fim func
//
//------ validar email ------
//funcao validateEmail(email)
//  se email não existir e não conter '@'
//  retorna false
// retorna true
//fim fun
//
//------ validar age ------
//funcao validateAge(age) opcional
//  se age existir e for menor que 18
//  retorna falso
// retorna true
//fim func
//
//------ validar user ------
//funcao validateUser(user)
// funcao ValidateName(nome do user)
//  se validate.name === false
//  retorna false
//
// funcao validateEmail(email do user)
//  se validate.email === false
//  retorna false
//
// funcao validateAge(age do user)
//  se validate.age === false
//  retorna false
// retorna true se todas as funcoes retornarem true se não, retorna false
//fim da func

// Frase inteligente para a entrevista

// Se o avaliador perguntar por que você separou em funções:

// “Separei as validações para manter responsabilidade única e facilitar testes e manutenção.”

// 💥 Isso é resposta de gente madura.

interface UserEx4 {
    name: string;
    email: string;
    age?: number;
}

function validateName(name: string): boolean {
    if (name.trim().length < 3) {
        return false
    }
    return true
}

function validateEmail(email: string): boolean {
    if (!email.includes('@')) {
        return false
    }
    return true
}

function validateAge(age?: number): boolean {
    if (age !== undefined && age < 18) {
        return false
    }
    return true
}

function validateUser(user: UserEx4): boolean {
    if (!validateName(user.name)) {
        return false
    }
    if (!validateEmail(user.email)) {
        return false
    }
    if (user.age !== undefined && !validateAge(user.age)) {
        return false
    }
    return true
}