import { Component, inject } from '@angular/core';
import { Food } from '../../../core/models/food.model';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../core/services/food-services/food-service';
import { AddFood } from '../../../core/models/addFood.model';

@Component({
  selector: 'app-food-detail-component',
  imports: [],
  templateUrl: './food-detail-component.html',
  styleUrl: './food-detail-component.css',
})
export class FoodDetailComponent {
  private activatedRoute = inject(ActivatedRoute);
  id: number = -1;

  private foodService = inject(FoodService);
  food: Food | undefined;

  constructor() {
    this.id = +this.activatedRoute.snapshot.params['id'];

    this.getFoodDetails();
  }

  getFoodDetails() {
    this.foodService.getFoodDetails(this.id).subscribe({
      next: (response) => {
        this.food = response;
      },
    });
  }
}
