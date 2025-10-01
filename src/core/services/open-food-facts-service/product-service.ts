import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private readonly httpClient = inject(HttpClient)
  private urlBase = 'http://localhost:3001/food' // URL vers votre serveur JSON local

  getProductByName(name:string)
  {
    return this.httpClient.get<any>(this.urlBase);
  }

  getByNutriScore()
  {
    return this.httpClient.get<any>(this.urlBase)
  }

}
