import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@auth/services/Auth.service';
import { firstValueFrom } from 'rxjs';

export const isAdminGuard: CanMatchFn = async(
  route: Route,
  segments: UrlSegment[]
) => {
  const authService = inject(AuthService);
  const router: Router = inject(Router);

  // const roles = await authService.userRoles();
  // if(!roles.includes('admin')) return router.navigateByUrl('/');
  const isAdmin = await firstValueFrom( authService.checkStatus() );
  if(!isAdmin) return router.navigateByUrl('/');
  return true;
}
