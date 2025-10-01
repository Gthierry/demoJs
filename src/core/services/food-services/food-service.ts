import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../models/food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private readonly API_URL = 'http://localhost:3001/food';

  constructor(private httpClient: HttpClient) {

  }

    getFood(): Observable<Food[]> {
        return this.httpClient.get<Food[]>(this.API_URL);
    }
  }
      


  

