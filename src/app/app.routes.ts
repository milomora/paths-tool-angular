import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard-page/dashboard-page.component').then((c) => c.DashboardPageComponent),
  },
  {
    path: 'paths',
    loadChildren: () => import('./paths/paths.routes').then((c) => c.routes),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
