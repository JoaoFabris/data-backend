interface Student {
    name: string;
    grade: number;
}

const studentsMock: Student[] = [
    { name: "João", grade: 90 },
    { name: "Maria", grade: 85 },
    { name: "Pedro", grade: 70 },
    { name: "Luiza", grade: 95 },
    { name: "Ana", grade: 100 }
];


function calculateAverageGrade(students: Student[]): number {
    const sum = students.reduce((acc, curr) => acc + curr.grade, 0)
    const total = students.length

    return sum / total
}
console.log(calculateAverageGrade(studentsMock));
