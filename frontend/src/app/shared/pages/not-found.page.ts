import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteRoutesConfig } from '@features/site';

@Component({
  selector: 'not-found-page',
  imports: [RouterLink
  ],
  template: `
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">Page not found</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a [routerLink]="[siteRoutesConfig.base.url]" class=" hover:bg-indigo-500">Go back home</a>
        </div>
    </div>
  </main>
  `,
})
export class NotFoundPage {
  readonly siteRoutesConfig = siteRoutesConfig
}
