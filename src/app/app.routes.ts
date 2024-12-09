import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent),
  },
  {
    path: 'paths',
    loadChildren: () => import('./paths/paths.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
