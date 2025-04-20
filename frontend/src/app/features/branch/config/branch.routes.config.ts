
export const branchRoutesConfig = {
    base : {
        url : '/branches',
        path : 'branches',
        label : 'Sucursales'
    },
    children : {
        list : {
            url : '/branches',
            path : 'branches',
            label : 'Lista de sucursales'
        },
        detail : {
            url : '/branches',
            path : ':documentId',
            label : 'Detalle de sucursal'
        }
    }
} 