// Requisitos:

// Use a interface Usuario.

// Identifique quais e-mails aparecem mais de uma vez.

// Retorne um array contendo apenas esses e-mails (sem repetir o e-mail na lista de duplicados).


interface Usuario4 {
    id: number;
    email: string;
}

const novosUsuarios: Usuario4[] = [
    { id: 1, email: "teste@bgc.com" },
    { id: 2, email: "contato@empresa.com" },
    { id: 3, email: "teste@bgc.com" }, // Duplicado
    { id: 4, email: "admin@bgc.com" },
    { id: 5, email: "contato@empresa.com" }, // Duplicado
];

function encontrarDuplicados(lista: Usuario4[]): string[] {
    const seen: string[] = []
    const repeted: string[] = []
    lista.forEach((e) => {
        if(seen.includes(e.email)){
            repeted.push(e.email)
        } else {
            seen.push(e.email)
        }
    })

    return repeted
}

console.log(encontrarDuplicados(novosUsuarios)); // Esperado: ["teste@bgc.com", "contato@empresa.com"]

function encontrarDuplicadosSet(lista: Usuario4[]): string[] {
    const vistos = new Set<string>(); //Os () servem para executar o construtor da classe Set. //“Crie uma nova instância de Set agora.”
    // Esse Set só pode armazenar strings
    const duplicados = new Set<string>();
    // Set é uma classe (um “molde”).

    // DICA: O Set é uma estrutura que não permite valores repetidos.
    // .has(valor) verifica se já existe.
    // .add(valor) adiciona.

    lista.forEach(u => {
        if (vistos.has(u.email)) {
            duplicados.add(u.email);
        } else {
            vistos.add(u.email);
        }
    });

    return Array.from(duplicados);
}

console.log(encontrarDuplicadosSet(novosUsuarios)); // Esperado: ["teste@bgc.com", "contato@empresa.com"]

// Por que o Set é melhor aqui?
// Velocidade: O método .includes() em um array percorre a lista toda toda vez (O(n)). O .has() 
// do Set é instantâneo (O(1)). Para uma lista de 10.000 usuários, a diferença é gigante.

// Limpeza: Você não precisa de um if extra para saber se o e-mail já foi adicionado aos repetidos; o Set cuida disso sozinho.