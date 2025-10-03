import { Component, inject } from '@angular/core';
import { FoodService } from '../../../core/services/food-services/food-service';
import { AddFood } from '../../../core/models/addFood.model';
import { Food } from '../../../core/models/food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-food-component',
  imports: [],
  templateUrl: './add-food-component.html',
  styleUrl: './add-food-component.css',
})
export class AddFoodComponent {
  private foodService = inject(FoodService);
  private readonly router = inject(Router);

  addFood() {
    const newFood: Food = {
      id: Math.floor(Math.random() * 1000).toString(),
      title: 'New Food',
      type: 'fruit',
      description: 'Description of new food',
      filename: 'newfood.jpg',
      height: 200,
      width: 200,
      price: 2.99,
      rating: 3,
    };
    console.log('mon composant : ' + newFood.title);
    this.foodService.addFood(newFood).subscribe({
      next: (response) => {
        console.log(response);
        // this.router.navigate(['/foods']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
