import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppHttpServiceParams } from '../models/http.service.params';
import { Observable } from 'rxjs';

export abstract class AppHttpBaseService {
  abstract readonly baseUrl: string;
  abstract readonly client: HttpClient;

  private resolveUrl(endpoint: string, baseUrlOverride?: string): string {
    const baseUrl: string = baseUrlOverride || this.baseUrl;
    return `${baseUrl}${endpoint}`;
  }

  get<T>(params: AppHttpServiceParams<void>): Observable<T> {
    return this.client.get<T>(
      this.resolveUrl(params.endpoint, params.baseUrlOverride),
      {
        params: params.httpParams,
      }
    );
  }

  post<T, Z>(params: AppHttpServiceParams<Z>): Observable<T> {
    return this.client.post<T>(
      this.resolveUrl(params.endpoint, params.baseUrlOverride),
      params.body,
      {
        params: params.httpParams,
      }
    );
  }

  put<T, Z>(params: AppHttpServiceParams<Z>): Observable<T> {
    return this.client.put<T>(
      this.resolveUrl(params.endpoint, params.baseUrlOverride),
      params.body,
      {
        params: params.httpParams,
      }
    );
  }

  delete<T>(params: AppHttpServiceParams<void>): Observable<T> {
    return this.client.delete<T>(
      this.resolveUrl(params.endpoint, params.baseUrlOverride),
      {
        params: params.httpParams,
      }
    );
  }
}
