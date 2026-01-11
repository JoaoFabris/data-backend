console.log("Arquivo challenge-1.ts executou");

type Person = {
    id: number;
    name: string;
    document: string;
    score: number;
    active: boolean;
}

const people: Person[] = [
    { id: 1, name: "João", document: "12345678900", score: 80, active: true },
    { id: 2, name: "", document: "98765432100", score: 50, active: true },
    { id: 3, name: "Maria", document: "111", score: 90, active: true },
    { id: 4, name: "Pedro", document: "22233344455", score: 40, active: false },
    { id: 5, name: "Ana", document: "55566677788", score: 95, active: true },
];

// {
//   validPeople: Person[];
//   totalValid: number;
//   averageScore: number;
// }

// Uma pessoa é válida se:
// name não estiver vazio
// document tiver 11 ou 14 caracteres
// score for maior ou igual a 60
// active for true

function processData(person: Person): boolean {
    if (!person.name || person.name.trim().length === 0)
        return false
    if (person.document.length !== 11 && person.document.length !== 14)
        return false
    if (person.score < 60)
        return false
    if (!person.active) {
        return false
    }
    return true
}

function isValidPerson(person: Person[]) {
    const validPeople = person.filter(processData)

    const totalValid = validPeople.length

    const averageScore = validPeople.reduce((acc, cur) => acc + cur.score, 0) / totalValid;
    return {
        validPeople,
        averageScore,
        totalValid,
    }
}

const result = isValidPerson(people)
console.log(result);
