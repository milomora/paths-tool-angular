import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

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
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
