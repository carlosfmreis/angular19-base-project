import { inject, Injectable } from '@angular/core';
import { AppHttpBaseService } from '../../../core/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppHttpService extends AppHttpBaseService {
  override readonly baseUrl: string = 'https://catfact.ninja';
  override readonly client: HttpClient = inject(HttpClient);
}
