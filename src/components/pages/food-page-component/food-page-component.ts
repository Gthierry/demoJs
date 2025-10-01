import { Component, inject } from '@angular/core';
import { Food } from '../../../core/models/food.model';
import { FoodService } from '../../../core/services/food-services/food-service';
import { NavbarComponent } from '../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-food-page-component',
  imports: [],
  templateUrl: './food-page-component.html',
  styleUrl: './food-page-component.css'
})
export class FoodPageComponent {

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
