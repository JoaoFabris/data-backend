//Exercício 17: Filtrar usuários maiores de idade

interface User {
  name: string;
  age: number;
}

const usersMock: User[] = [
  { name: "Ana", age: 17 },
  { name: "Bruno", age: 18 },
  { name: "Carlos", age: 25 },
  { name: "Daniela", age: 16 },
  { name: "Eduardo", age: 30 },
  { name: "Fernanda", age: 21 }
];


function filterAdults(users: User[]): User[] {
    return users.filter(u => u.age >= 18)

}

console.log(filterAdults(usersMock));
