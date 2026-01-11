
type OrderItem = {
    productId: number;
    quantity: number;
    price: number
}

type Order = {
    id: number;
    customerName: string;
    items: OrderItem[]
    discount: number;
    paid: boolean;
}

type OrderSummary = {
    filterValidOrder: Order[];
    totalValid: number;
    totalRevenue: number;
}

const orders: Order[] = [
    {
        id: 1,
        customerName: "Carlos",
        items: [
            { productId: 1, quantity: 2, price: 50 },
            { productId: 2, quantity: 1, price: 100 }
        ],
        discount: 10,
        paid: true
    },
    {
        id: 2,
        customerName: "",
        items: [
            { productId: 3, quantity: 1, price: 200 }
        ],
        discount: 0,
        paid: true
    },
    {
        id: 3,
        customerName: "Mariana",
        items: [],
        discount: 5,
        paid: true
    },
    {
        id: 4,
        customerName: "João",
        items: [
            { productId: 4, quantity: 1, price: 80 }
        ],
        discount: 110,
        paid: true
    },
    {
        id: 5,
        customerName: "Ana",
        items: [
            { productId: 5, quantity: 3, price: 30 }
        ],
        discount: 0,
        paid: false
    },
    {
        id: 5,
        customerName: "Roberta",
        items: [
            { productId: 5, quantity: 4, price: 40 }
        ],
        discount: 0,
        paid: true
    },
      {
        id: 5,
        customerName: "Fernanda",
        items: [
            { productId: 5, quantity: 4, price: 40 }
        ],
        discount: 5,
        paid: true
    }
];




// Um pedido é válido se:

// customerName não estiver vazio

// items tiver pelo menos 1 item

// Cada item:

// quantity > 0

// price > 0

// discount estiver entre 0 e 100

// paid for true

// {
//   validOrders: Order[];
//   totalValid: number;
//   totalRevenue: number;
// }

function processOrder(order: Order): boolean {
    if (order.items.some(
        item => item.price <= 0 || item.quantity <= 0
    )) {
        return false
    }
    if (!order.customerName || order.customerName.trim().length === 0)
        return false
    if (order.discount < 0 || order.discount > 100)
        return false
    if (!order.items || order.items.length === 0)
        return false
    if (!order.paid)
        return false


    return true
}

function calculeOrderTotal(order: Order): number {
    const subtotal = order.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const totalWithDiscount = (order.discount / 100) * subtotal
    console.log(subtotal);
    console.log(totalWithDiscount);
    return subtotal - totalWithDiscount
}

function finalLogic(order: Order[]): OrderSummary {
    const filterValidOrder = order.filter(processOrder)

    const totalValid = filterValidOrder.length


    const totalRevenue = filterValidOrder.reduce((acc, curr) =>
        acc + calculeOrderTotal(curr), 0
    )
    return {
        filterValidOrder,
        totalValid,
        totalRevenue
    }

}

const result1 = finalLogic(orders)
console.log(result1);
