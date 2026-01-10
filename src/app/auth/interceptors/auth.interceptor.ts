import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@auth/services/Auth.service";
import { Observable, tap } from "rxjs";

export const authhInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const token = inject(AuthService).token();
  if(!token) return next(req);

  const newReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(newReq)/* .pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    })
    ) */;
}
