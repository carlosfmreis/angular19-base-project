import { inject, Injectable } from '@angular/core';
import { AppHttpService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppCatFactsModel } from '../models/cat-facts.model';

@Injectable()
export class AppDataService {
  readonly httpService = inject(AppHttpService);

  readonly factsEndpoint: string = '/facts';
  readonly factsLimit: number = 10;

  getFacts(): Observable<AppCatFactsModel> {
    let params: HttpParams = new HttpParams();
    params = params.set('limit', this.factsLimit.toString());
    return this.httpService.get<AppCatFactsModel>({
      endpoint: this.factsEndpoint,
      httpParams: params,
    });
  }
}
