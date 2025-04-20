export const productRoutesConfig = {
    base: {
        label: 'Product',
        url: '/product',
        path: 'product'
    },
    children : {
        list : {
            url : '/product',
            path : 'product',
            label : 'Product List'
        },
        detail : {
            url : '/product',
            path : ':documentId',
            label : 'Product Detail'
        }
    }
}