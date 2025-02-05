import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { filter, map, tap } from 'rxjs';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routerService = inject(Router);

  return authService.authStatus.pipe(
    filter((status) => status !== 'waiting'),
    map((status) => status === 'not-logged'),
    tap((isNotLogged) => {
      if (!isNotLogged) routerService.navigate(['/']);
    }),
  );
};
