import { Component, inject } from '@angular/core';
import { Food } from '../../../core/models/food.model';
import { FoodService } from '../../../core/services/food-services/food-service';

@Component({
  selector: 'app-foods-list-component',
  imports: [],
  templateUrl: './foods-list-component.html',
  styleUrl: './foods-list-component.css'
})
export class FoodsListComponent {
   //injecter service
  private myService = inject(FoodService);
  //creer la liste de food
  foodList: Food[] = [];

  constructor() {
    this.myService.getFood().subscribe({
      next: (response: Food[]) => {
        this.foodList = response;
        console.log(this.foodList);
      },
      error: (error: any) => {
        console.log("error : " + error.message);
      }
    });

}

}
