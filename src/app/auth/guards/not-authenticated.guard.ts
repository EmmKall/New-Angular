import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@auth/services/Auth.service';
import { firstValueFrom } from 'rxjs';

export const NoAuthenticatedGuard: CanMatchFn = async(
  route: Route,
  segments: UrlSegment[]
) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const isAuthenticated = await firstValueFrom( authService.checkStatus() );

  if(isAuthenticated) return router.navigateByUrl('/');
  return true;
}
