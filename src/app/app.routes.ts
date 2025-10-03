import { Routes } from '@angular/router';
import { Homepage } from '../components/pages/homepage/homepage';
import { ChuckJokesComponent } from '../components/pages/chuck-jokes-component/chuck-jokes-component';
import { OpenFoodComponent } from '../components/pages/nutrition-component/open-food-component/open-food-component';
import { FoodPageComponent } from '../components/pages/food-page-component/food-page-component';
import { FoodsListComponent } from '../components/pages/foods-list-component/foods-list-component';
import { AddFoodComponent } from '../components/pages/add-food-component/add-food-component';
import { FoodDetailComponent } from '../components/pages/food-detail-component/food-detail-component';

export const routes: Routes = [
  { path: 'home', component: Homepage },
  { path: 'chuck', component: ChuckJokesComponent },
  { path: 'openFood', component: OpenFoodComponent },
  { path: 'foods-list', component: FoodsListComponent },
  { path: 'food-detail/:id', component: FoodDetailComponent },
  { path: '', component: FoodPageComponent },
  { path: 'add-food', component: AddFoodComponent },
];
