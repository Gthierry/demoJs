import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../models/food.model';
import { AddFood } from '../../models/addFood.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly API_URL = 'http://localhost:3001/food/';

  constructor(private httpClient: HttpClient) {}

  getFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.API_URL);
  }

  addFood(newFood: Food) {
    return this.httpClient.post(this.API_URL, newFood);
  }

  getFoodDetails(foodId: number): Observable<Food> {
    return this.httpClient.get<Food>(this.API_URL + foodId);
  }

  updateFood(food: Food) {
    console.log('mon service:' + food.title);

    return this.httpClient.put<Food>(this.API_URL + food.id, food);
  }
}
