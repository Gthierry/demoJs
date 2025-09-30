import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IgService {

  private readonly httpClient = inject(HttpClient);
  private readonly url = ' https://api.syndigo.com';

}
