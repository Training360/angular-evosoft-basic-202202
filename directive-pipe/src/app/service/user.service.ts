import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: User[] = [
    new User({id: 1, firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'}),
    new User({id: 2, firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'}),
    new User({id: 3, firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'}),
  ];

  constructor() { }
}
