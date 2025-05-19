
export const branchRoutesConfig = {
    base : {
        url : '/branches',
        path : 'branches',
        label : 'Locales'
    },
    children : {
        list : {
            url : '/branches',
            path : 'branches',
            label : 'Lista de locales'
        },
        detail : {
            url : '/branches',
            path : ':documentId',
            label : 'Detalle de local'
        }
    }
} 