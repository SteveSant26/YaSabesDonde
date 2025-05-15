import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'branches/:documentId',
    renderMode: RenderMode.Client,
  },
  {
    path: 'menu/:documentId',
    renderMode: RenderMode.Client,
  },
];
