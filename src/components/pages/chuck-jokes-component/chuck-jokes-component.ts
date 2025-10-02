import { Component, inject } from '@angular/core';
import { ChuckJokeModel } from '../../../core/models/chuck-joke-model';
import { Subscription, Observable } from 'rxjs';
import { ChuckJokeService } from '../../../core/services/chuck-joke-service/chuck-joke-service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-chuck-jokes-component',
  imports: [
    JsonPipe

  ],
  templateUrl: './chuck-jokes-component.html',
  styleUrl: './chuck-jokes-component.css'
})
export class ChuckJokesComponent {

  private readonly chuckJokeService = inject(ChuckJokeService);
  mySubscription: Subscription = new Subscription();
  joke: any | undefined;

  img: string = "";
  joke$!: Observable<ChuckJokeModel>

  constructor() {
    this.mySubscription = this.chuckJokeService.getJoke().subscribe({
      next: (response) => {
        this.joke = response;
        console.log(response);

      },
      error: (error: any) => {
        console.log("error : " + error.message);
      }
    });
    this.joke$ = this.chuckJokeService.getJoke();
    this.chuckJokeService.getJoke();
  }

}
