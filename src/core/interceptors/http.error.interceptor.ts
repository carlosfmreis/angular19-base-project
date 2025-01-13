import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AppError, AppErrors } from '../models/error';

@Injectable()
export class AppHttpErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let type: AppErrors = AppErrors.General;
        switch (error.status) {
          case 404:
            type = AppErrors.NotFound;
            break;
          case 403:
            type = AppErrors.Forbidden;
            break;
          case 401:
            type = AppErrors.Unauthorized;
            break;
        }
        return throwError(
          () =>
            new AppError({
              type: type,
              message: error.message,
            })
        );
      })
    );
  }
}
