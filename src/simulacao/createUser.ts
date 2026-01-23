// EXERCÍCIO 5 — CRUD EM MEMÓRIA (Node / Backend)

// 📌 Esse é MUITO comum para estágio/júnior backend, especialmente quando a stack é Node + TypeScript.

// 🧠 Contexto (como o avaliador falaria)

// “Imagine que isso é uma API simples, mas sem banco de dados por enquanto.
// Vamos trabalhar apenas em memória.”

// 📌 Enunciado

// Você tem uma lista de usuários em memória.

// Cada usuário possui:

// {
//   id: number,
//   name: string,
//   email: string
// }


// Implemente as seguintes funções:

// createUser(name, email)

// getUserById(id)

// updateUser(id, data)

// deleteUser(id)

// Regras:

// id deve ser incremental

// email deve ser único

// updateUser pode atualizar name e/ou email

// Se o usuário não existir → retorne null

// Se tentar criar/atualizar com email já existente → erro ou null

//=======funcao validarUser(user) 
//
//funcao createUser(name, email)
//  SE email ja existe na lista de user
//   RETORNE false
//  
//  criar um novo user:
//   id = listaUser.length + 1
//   name = user.name
//   email = user.email
//
//  add o novo user a lista de user
//  
// retorna novoUser
//FIM FUNCAO
//
//funcao getId(user.id)
// PARA cada users em lista de user
//  SE users.id === id
//   RETORNAR users
//FIM FUNCAP
//
//funcao updateUser(user.id, data)
// chamar funcaogetId(user.id)
// const user === funcaogetid
// SE retornar false
//  RETORNA false
// SE data.email não existir e data.email ja existir em outro user
//  RETORNA false
// 
// atualizar name se existir em data
// atualizar email se existir em data
//
//FIM FUNCAO
//
//funcao deleteUser(user.email)
// ENCONTRAR user na lista de user
// SE nao encontrar user
//  RETORNA false
//
// remover user
//  RETORNAR true
//FIM FUNCAO

interface UserEx5 {
    id: number,
    name: string,
    email: string,
}

const userEx5: UserEx5[] = []
let nextId = 1

function createUser(name: string, email: string): UserEx5 | null {
    if (!validateEmailCreate(email)) {
        return null
    }

    if (!validateNameCreate(name)) {
        return null
    }
    const emailExistis = userEx5.find((e) => e.email === email)
    console.log(emailExistis);
    if (emailExistis) {
        return null
    }
    const newUser = {
        id: nextId++,
        name: name,
        email: email
    }
    userEx5.push(newUser)
    return newUser
}
console.log("cria um user", createUser('joao', 'joao@test.com'));

function getId(id: number): UserEx5 | null {
    const findId = userEx5.find((e) => e.id === id)

    if (!findId) {
        return null
    }

    return findId
}

console.log("acha um user", getId(1));

function updateUser(id: number, data: Partial<Omit<UserEx5, "id">>): UserEx5 | null { // Partial torna eopcional, td q é dentro de UserEX5(T) e com Omit, iremos criar um novo tipo com td em UserEx5, menos o 'id' q iremos omitir
    const findId = userEx5.find((e) => e.id === id)
    if (!findId) {
        return null
    }

    if (data.email !== undefined) {
        if (!validateEmailCreate(data.email)) {
            findId.email = data.email
        }
    }
    if (data.name !== undefined) {
        if (!validateNameCreate(data.name)) {
            findId.name = data.name
        }
    }
    return findId
}

console.log("update um user", updateUser(1, ({ name: 'joao test', email: ' test@email.com' })));

console.log("acha um user UPDATE", getId(1));

function deleteUser(id: number): boolean {
    const findId = userEx5.findIndex((e) => e.id === id) //acha pela posição
    console.log('findid', findId);

    if (findId === -1) {
        return false
    }

    userEx5.splice(findId, 1) // passa a posição e depois deleta quantos contando a partir dele ? nesse caso 1, somente ele
    return true
}
console.log('delete user', deleteUser(1));
console.log("acha um user apos DELETE", getId(1));

function validateEmailCreate(email: string) {
    const hasSymbol = email.includes('@')
    if (!hasSymbol) {
        return false
    }

    // verifica se tem ponto apos @
    const parts = email.split('@')
    const getPart = parts[1]
    console.log(parts);
    console.log(getPart);
    if (!getPart.includes('.')) {
        return false
    }
    return true
}

function validateNameCreate(name: string): boolean {
    if (name.trim().length < 3) {
        return false
    }
    return true
}

console.log(validateEmail('nome@email.com'));
