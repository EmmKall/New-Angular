import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export const logginhInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  console.log('logginhInterceptor');
  return next(req).pipe(
    tap(event => {
      /* if (event.type === HttpEventType.Response) {
        console.log(event.body);
      } */
    })
    );
}


/* import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogginhInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

} */
