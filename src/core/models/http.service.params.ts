import { HttpParams } from '@angular/common/http';

export interface AppHttpServiceParams<T> {
  endpoint: string;
  body?: T;
  httpParams?: HttpParams;
  baseUrlOverride?: string;
}
