import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { loggedGuard } from './core/guards/logged.guard';
import { notLoggedGuard } from './core/guards/not-logged.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent),
    canActivate: [loggedGuard],
  },
  {
    path: 'paths',
    loadChildren: () => import('./paths/paths.routes').then((m) => m.routes),
    canActivate: [loggedGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [notLoggedGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
