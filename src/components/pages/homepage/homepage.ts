import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/users/user-service';
import { User } from '../../../core/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [

  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  private readonly userService = inject(UserService);

  users: User[] = [];

  users$!: Observable<User[]>;

  mySubscription: Subscription = new Subscription();

  constructor() {
    // on consome l'informations contenu dans l'observable
    this.mySubscription = this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      }
    })

    // Recuperation d'un observable qui necessite le pipe async
    this.users$ = this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
