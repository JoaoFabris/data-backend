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

interface UserOOP {
    id: number,
    name: string,
    email: string,
}


const initialUsers: UserOOP[] = [
    { id: 1, name: "Ana", email: "ana@email.com" },
    { id: 2, name: "Carlos", email: "carlos@email.com" }
]


class User2 {
    private nextIdOOP = 1
    private users: UserOOP[] = []

    constructor(initialUser: UserOOP[]) {
        this.users = [...initialUser]
        if (initialUser.length > 0) {
            const maxId = Math.max(...this.users.map(e => e.id)) // Isso percorre o array e extrai só os IDs. // o math.max precisa receber numeros separados Math.max(1, 2), por isso ... dentro this.users
            this.nextIdOOP = maxId + 1
        }
    }

    getAll(): UserOOP[] | null {
        if(this.users.length < 0) {
            return null
        }
        return [...this.users]
    }


    createUser(name: string, email: string): UserOOP | null {
        if (!this.validateNameCreate(name)) {
            return null
        }
        if (!this.validateEmailCreate(email)) {
            return null
        }
        // verifica se há esse mail na lista
        const findEmail = this.users.some((e) => e.email === email)
        if (findEmail) {
            return null
        }
        const newUser = {
            id: this.nextIdOOP++,
            name: name,
            email: email
        }
        this.users.push(newUser)
        return newUser
    }

    getByid(id: number): UserOOP | null {
        const findId = this.users.find((e) => e.id === id)
        if (!findId) {
            return null
        }

        return findId
    }

    updateUser(id: number, data: Partial<Omit<UserOOP, 'id'>>): UserOOP | null {
        const findId = this.users.find((e) => e.id === id)
        if (!findId) {
            return null
        }

        if (data.name !== undefined) {
            if (this.validateNameCreate(data.name)) {
                findId.name = data.name
            }
        }
        if (data.email !== undefined) {
            if (this.validateEmailCreate(data.email)) {
                findId.email = data.email
            }
        }
        const findNewExistingEmail = this.users.some((e) => e.email === data.email)
        if (findNewExistingEmail) {
            return null
        }

        return findId
    }

    delete(id:number): boolean {
        const findIndex = this.users.findIndex((e) => e.id === id)
        if(findIndex === -1){
            return false
        }
        this.users.splice(findIndex, 1)
        return true
    }

    validateEmailCreate(email: string) {
        const hasSymbol = email.includes('@')
        if (!hasSymbol) {
            return false
        }

        // verifica se tem ponto apos @
        const parts = email.split('@')
        const getPart = parts[1]
        if (!getPart.includes('.')) {
            return false
        }
        return true
    }

    validateNameCreate(name: string): boolean {
        if (name.trim().length < 3) {
            return false
        }
        return true
    }
}
const service = new User2(initialUsers)
console.log('cria o user', service.createUser('joao', 'joao@email.com'));
console.log('getbyid', service.getByid(1));
console.log('update user', service.updateUser(3, { email: 'testeUPDATE@email.com' }));
console.log('getbyid', service.getByid(3));
console.log('delete', service.delete(3));
console.log('acha o user deletado', service.getByid(3));
console.log('GETALL', service.getAll());



//O constructor é executado automaticamente quando você faz:

// new User2(...)

// Ele serve para:

// Inicializar o estado interno da classe

// Garantir que o objeto nasça válido

// Receber dependências ou dados iniciais

// No seu código:

// constructor(initialUser: UserOOP[]) {
//     this.users = initialUser
// }

//Significa:

// “Quando eu criar essa classe, quero decidir quais usuários ela já começa tendo.”