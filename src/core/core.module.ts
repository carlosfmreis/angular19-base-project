import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppHttpErrorInterceptor } from './interceptors/http.error.interceptor';
import { AppHttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { AppHttpService } from './services/http.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpErrorInterceptor,
      multi: true,
    },
    AppHttpService,
  ],
})
export class AppCoreModule {}
