import { Routes } from "@angular/router";
import { BranchesPage, BranchPage } from "./pages";
import { branchRoutesConfig } from "./config";
import { BranchLayout } from "./branch.layout";

export const branchRoutes: Routes = [
    {
        path: branchRoutesConfig.base.path,
        component: BranchLayout,
        children: [
            {
                path: '',
                component: BranchesPage
            },
            {
                path: branchRoutesConfig.children.detail.path,
                component: BranchPage,
                data : {
                    renderMode : 'server'
                }
            }
        ]
    }
]