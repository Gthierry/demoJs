import { Component, inject } from '@angular/core';
import {  ProductService } from '../../../../core/services/open-food-facts-service/product-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-open-food-component',
  imports: [],
  templateUrl: './open-food-component.html',
  styleUrl: './open-food-component.css'
})
export class OpenFoodComponent {

  //injecter service
  myService = inject(ProductService)
  //crée une subscription
  mySubscription: Subscription = new Subscription();

  //ton model
  product: any | null
  
  constructor()
  {
     this.mySubscription = this.myService.getByNutriScore().subscribe({
      next: (response:any) => {
        this.product = response; // Stocker la réponse dans la propriété product
        console.log('Données reçues:', response);
      },
      error: (error: any) => {
        console.log("error : " + error.message);
      }
    });
  }

  

}
