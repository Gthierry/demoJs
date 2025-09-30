import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly httpClient = inject(HttpClient);

  private readonly url = 'http://localhost:3000/users'

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

}
