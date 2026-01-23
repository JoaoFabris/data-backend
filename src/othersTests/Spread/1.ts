interface prodInterface {
    id: number,
    preco: number,
    desc: string,
}

const produtos: prodInterface[] = [
    { id: 10, preco: 50, desc: 'Camiseta' },
    { id: 11, preco: 100, desc: 'Calça' },
    { id: 12, preco: 30, desc: 'Meia' }
];


function update(id: number, data: Partial<Omit<prodInterface, 'id'>>): prodInterface | null {
    const findIndex = produtos.findIndex((e) => e.id === id)
    if(findIndex === -1) return null

    const updateProd = {
        ...produtos[findIndex],
        ...data   
    }

    return produtos[findIndex] = updateProd
}
console.log(update(10,{preco: 60}));
