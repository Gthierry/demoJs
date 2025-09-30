import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckJokeModel } from '../../models/chuck-joke-model';

@Injectable({
  providedIn: 'root'
})
export class ChuckJokeService {

  private readonly httpClient = inject(HttpClient);
  private readonly url = ' https://v2.jokeapi.dev/joke/Programming'

  getJoke() {
    return this.httpClient.get<any>(this.url);
  }

}

