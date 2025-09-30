import { Routes } from '@angular/router';
import { Homepage } from '../components/pages/homepage/homepage';
import { ChuckJokesComponent } from '../components/pages/chuck-jokes-component/chuck-jokes-component';

export const routes: Routes = [
    { path: 'home', component: Homepage },
    { path: '', component: ChuckJokesComponent }
];
