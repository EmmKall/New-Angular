import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { logginhInterceptor } from '@shared/interceptors/loggin.interceptor';
import { authhInterceptor } from '@auth/interceptors/auth.interceptor';
import { isAdminGuard } from '@auth/guards/is-admin.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        logginhInterceptor,
        authhInterceptor,
      ])
    ),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
