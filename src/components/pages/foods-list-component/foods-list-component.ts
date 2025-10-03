import { Component, inject } from '@angular/core';
import { Food } from '../../../core/models/food.model';
import { FoodService } from '../../../core/services/food-services/food-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-foods-list-component',
  imports: [
    FormsModule
  ],
  templateUrl: './foods-list-component.html',
  styleUrl: './foods-list-component.css'
})
export class FoodsListComponent {
  //injecter service
  private myService = inject(FoodService);

  //creer la liste de food
  foodList: Food[] = [];

  foodCount: number | undefined;

  private router = inject(Router);


  constructor() {

    //appel du service pour recuperer la liste des aliments
    this.myService.getFood().subscribe({
      next: (response: Food[]) => {
        this.foodList = response;
        this.foodCount = this.foodList.length;
      },
      error: (error: any) => {
        console.log("error : " + error.message);
      }
    });

  }

  onClick(params: string) {
    this.router.navigate(['/food-detail', params]);
  }



}
