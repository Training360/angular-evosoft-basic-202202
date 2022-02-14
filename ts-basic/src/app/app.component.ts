import { Component } from '@angular/core';

interface IUser {
  id: number,
  name: string,
  email: string,
  address?: string,
};

export interface IProduct {
  id: number,
  name: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // null, undifined, number, boolean, string
  appName: string = 'Awesome Evosoft Angular Basic app';
  title: string = `ts-basic ${this.appName}`;
  version: number = 0;
  active: boolean = true;
  amount: number = 0;
  credit: number | null = null;

  // collections: Array, Object, (Map, WeakMap)
  levels: number[] = [
    1,
    2,
    3,
  ];
  levels2: Array<number> = [4, 5, 6];
  user: IUser = {
    id: 1,
    name: 'Pisti',
    email: 'pisti@gmail.com',
    address: 'Budapest',
  };

  products: IProduct[] = [
    {
      id: 1,
      name: 'Iron',
    },
  ];

  constructor() {
    this.version = 0.1;
  }

  greeting(): string {
    return `Welcome form the ${this.appName}`;
  }

}
