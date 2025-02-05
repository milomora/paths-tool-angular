import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers.has('Authorization')) return next(req);

  const authService = inject(AuthService);

  return authService.token.pipe(
    switchMap((token) => {
      return token
        ? next(
            req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`),
            }),
          )
        : next(req);
    }),
  );
};
