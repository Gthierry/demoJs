import { Component, inject } from '@angular/core';
import { Food } from '../../../core/models/food.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../core/services/food-services/food-service';
import { AddFood } from '../../../core/models/addFood.model';

@Component({
  selector: 'app-food-detail-component',
  imports: [],
  templateUrl: './food-detail-component.html',
  styleUrl: './food-detail-component.css',
})
export class FoodDetailComponent {
  id: number = -1;
  food: Food | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private route = inject(Router);
  private foodService = inject(FoodService);

  constructor() {
    this.id = +this.activatedRoute.snapshot.params['id'];

    this.getFoodDetails();
  }

  getFoodDetails() {
    this.foodService.getFoodDetails(this.id).subscribe({
      next: (response: Food) => {
        this.food = response;
      },
    });
  }

  updatedFood: AddFood = {
    title: 'Updated Angular Post',
    type: 'my ho my',
    description: 'you hou hou',
    filename: 'zefzfze',
    height: 5,
    width: 5,
    price: 5,
  };

  updateFood() {
    if (this.food) {
      this.food.title = this.updatedFood.title;
      this.food.type = this.updatedFood.type;
      this.food.description = this.updatedFood.description;
      this.food.filename = this.updatedFood.filename;
      this.food.height = this.updatedFood.height;
      this.food.width = this.updatedFood.width;
      this.food.price = this.updatedFood.price;

      this.foodService.updateFood(this.food).subscribe({
        next: (response) => {
          console.log('details ' + response);
          //this.route.navigate(['foods-list']);
        },
      });
    }
  }
}
