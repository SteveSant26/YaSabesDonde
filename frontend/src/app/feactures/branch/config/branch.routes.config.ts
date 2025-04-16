import { RoutesConfig } from "@shared/types";

export const branchRoutesConfig = {
    base : {
        url : '/branches',
        path : 'branches',
        label : 'Branches'
    },
    children : {
        list : {
            url : '/branches',
            path : 'branches',
            label : 'Branches List'
        },
        detail : {
            url : '/branches',
            path : ':documentId',
            label : 'Branch Detail'
        }
    }
} 