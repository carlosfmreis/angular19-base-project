import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppHttpServiceParams } from '../models/http.service.params';
import { Observable } from 'rxjs';

export abstract class AppHttpBaseService {
  abstract baseUrl: string;

  abstract client: HttpClient;

  get<T>(params: AppHttpServiceParams<void>): Observable<T> {
    return this.client.get<T>(params.endpoint, {
      params: params.httpParams,
    });
  }

  post<T, Z>(params: AppHttpServiceParams<Z>): Observable<T> {
    return this.client.post<T>(params.endpoint, params.body, {
      params: params.httpParams,
    });
  }

  put<T, Z>(params: AppHttpServiceParams<Z>): Observable<T> {
    return this.client.put<T>(params.endpoint, params.body, {
      params: params.httpParams,
    });
  }

  delete<T>(params: AppHttpServiceParams<void>): Observable<T> {
    return this.client.delete<T>(params.endpoint, {
      params: params.httpParams,
    });
  }
}

@Injectable()
export class AppHttpService extends AppHttpBaseService {
  // TODO: set API base url
  override baseUrl: string = '';

  override client: HttpClient = inject(HttpClient);
}
