export const ordersRoutesConfig = {
    base: {
        label: 'Orders',
        url: '/orders',
        path: 'orders'
    },
    children : {
        checkout : {
            label : 'Checkout',
            url : 'orders/checkout',
            path : 'checkout',
        },

    }
}