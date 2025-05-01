import { Routes } from "@angular/router";
import { profileRoutesConfig } from "./config";
import { ProfileLayout } from "./profile.loyout";
import { EditPage, MePage } from "./pages";

export const profileRoutes : Routes = [
  {
    path: profileRoutesConfig.base.path,
    component: ProfileLayout,
    children: [
      {
        path: profileRoutesConfig.children.me.path,
        component: MePage,
      },
      {
        path: profileRoutesConfig.children.edit.path,
        component: EditPage,
      },
    ],
  },
];