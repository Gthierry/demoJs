import { Component, inject } from '@angular/core';
import { FoodService } from '../../../core/services/food-services/food-service';
import { AddFood } from '../../../core/models/addFood.model';
import { Food } from '../../../core/models/food.model';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-add-food-component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-food-component.html',
  styleUrl: './add-food-component.css',
})
export class AddFoodComponent {
  //injection router pour l'ajout
  private foodService = inject(FoodService);
  //injection du router pour la redirection
  private readonly router = inject(Router);
  //injection de Formbuilder pour le formulaire pour la création du formulaire
  fb = inject(FormBuilder);
  //Création du formGroup
  fg: FormGroup;

  //recupère le nombre d'élément dans la liste food
  foodCount: number | undefined;

  constructor() {
    this.fg = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      filename: [''],
      height: [''],
      width: [''],
      price: ['', Validators.required],
    });
  }

  addFoodFromService(): void {
    this.foodService.getFood().subscribe({
      next: (response) => {
        this.foodCount = response.length;
        this.foodCount += 1;
        console.log('1. reponse id : ' + response.length);
        this.addFood();
      },
    });
  }

  //calcul de l'id suivant, récupération de la liste des produits et compte

  addFood() {
    //récupère l'id

    console.log('last id: ' + this.foodCount);

    if (this.fg.valid) {
      const newFood: Food = {
        id: this.foodCount !== undefined ? this.foodCount.toString() : '',
        title: this.fg.value.title,
        type: this.fg.value.type,
        description: this.fg.value.description,
        filename: this.fg.value.filename || 'default.jpg',
        height: Number(this.fg.value.height),
        width: Number(this.fg.value.width),
        price: Number(this.fg.value.price),
        rating: 3,
      };

      console.log('my id: ' + newFood.id);
      console.log('my title : ' + newFood.title);
      console.log('my description : ' + newFood.description);
      console.log('my filename :' + newFood.filename);
      console.log('my height : ' + newFood.height);
      console.log('my width : ' + newFood.width);
      console.log('my price' + newFood.price);
      console.log('my rating : ' + newFood.rating);

      this.foodService.addFood(newFood).subscribe({
        next: (response) => {
          console.log(response);

          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
