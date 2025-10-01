import { Routes } from '@angular/router';
import { Homepage } from '../components/pages/homepage/homepage';
import { ChuckJokesComponent } from '../components/pages/chuck-jokes-component/chuck-jokes-component';
import { OpenFoodComponent } from '../components/pages/nutrition-component/open-food-component/open-food-component';
import { FoodPageComponent } from '../components/pages/food-page-component/food-page-component';

export const routes: Routes = [
    { path: 'home', component: Homepage },
    { path: 'chuck', component: ChuckJokesComponent },
    { path: 'openFood', component: OpenFoodComponent },
    { path: '', component: FoodPageComponent }
];
