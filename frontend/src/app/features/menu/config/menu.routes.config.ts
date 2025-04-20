export const menuRoutesConfig = {
    base: {
        url: '/menu',
        path: 'menu',
        label: 'Menu'
    },
    children: {
        list: {
            url: '/menu',
            path: 'menu',
            label: 'Menu List'
        },
        detail: {
            url: '/menu',
            path: ':documentId',
            label: 'Menu Detail'
        }
    }
}