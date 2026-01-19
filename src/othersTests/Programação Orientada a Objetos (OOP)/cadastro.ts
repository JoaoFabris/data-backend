//Programação Orientada a Objetos (OOP).
// A ideia central é simples:

// Juntar dados + comportamento que pertencem ao mesmo conceito.




// 2️⃣ Comparação direta (sem classe vs com classe)
// ❌ Sem classe (código solto)
// const users: User[] = [];

// function addUser(user: User) {
//   users.push(user);
// }

// function listAdults() {
//   return users.filter(u => u.age >= 18);
// }


// Problemas:

// users fica exposto
// Qualquer parte do código pode mexer nele
// Difícil controlar regras
// Pouco escalável




interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

class UserManager {
  private users: User[] = [];

  constructor(initialUsers: User[]) { //O constructor é a função que roda quando você cria um objeto da classe.
    this.users = initialUsers
  }

  // - addUser(user: User): void
  addUser(user: User): void {
    this.users.push(user)
  }

  // - removeUser(id: number): boolean
  removeUser(id: number): boolean {
    const initialLength = this.users.length
    this.users = this.users.filter(user => user.id !== id)
    // Retorna true se algo foi removido
    return this.users.length < initialLength
  }
  // - findUserByEmail(email: string): User | undefined

  findUserByEmail(email: string): User | undefined {
    return this.users.find((e) => e.email === email)
  }
  // - listAdultUsers(): User[]
  listAdultUsers(): User[] {
    return this.users.filter(e => e.age >= 18)
  }
  // - getAverageAge(): number
  getAverageAge(): number {
    if (this.users.length === 0) return 0;
    const lengthUser = this.users.length
    const reduce = this.users.reduce((acc, curr) => acc + curr.age, 0)
    return reduce / lengthUser
  }

  // - achar por nome
  getByName(name: string): User | undefined {
    return this.users.find((a) => a.name === name)

  }


}


const usersMock1: User[] = [
  {
    id: 1,
    name: "João Fabris",
    email: "joao@gmail.com",
    age: 30,
  },
  {
    id: 2,
    name: "Maria Silva",
    email: "maria@gmail.com",
    age: 17, // menor de idade (caso de borda)
  },
  {
    id: 3,
    name: "Carlos Souza",
    email: "carlos@gmail.com",
    age: 25,
  },
  {
    id: 4,
    name: "Ana Pereira",
    email: "ana@gmail.com",
    age: 18, // limite exato
  },
  {
    id: 5,
    name: "Fernanda Lima",
    email: "fernanda@gmail.com",
    age: 40,
  },
];


const manager = new UserManager(usersMock1)
console.log("Lista de adultos", manager.listAdultUsers());
console.log("Busca Por email:maria@gmail.com", manager.findUserByEmail("maria@gmail.com"));
console.log("Add um user", manager.addUser({ id: 6, name: "Teste ADD", email: "teste@teste.com", age: 55 }));
console.log("Pegar média de idade", manager.getAverageAge());
console.log("Achar por nome", manager.getByName("Maria Silva"));
console.log("Remover um user", manager.removeUser(2));




