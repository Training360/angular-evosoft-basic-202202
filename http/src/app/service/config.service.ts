import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userTableColumns: ITableColumn[] = [
    {key: 'id', title: 'ID'},
    {key: 'fullName', title: 'Name'},
    {key: 'email', title: 'Email'},
    {key: 'address', title: 'Address'},
    {key: 'active', title: 'Active'},
  ];

  // {"id":1,"name":"Datesee","price":82,"category":"Electronic"}
  productTableColumns: ITableColumn[] = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'price', title: 'Price'},
    {key: 'category', title: 'Cat.'},
  ];

  constructor() { }
}
