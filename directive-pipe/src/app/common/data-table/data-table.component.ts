import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() list: User[] = [];

  @Input() cols: ITableColumn[] = [];

  sortKey: string = '';

  sortDirection: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSort(key: string): void {
    if (this.sortKey === key) {
      this.sortDirection *= -1;
      return;
    }

    this.sortKey = key;
    this.sortDirection = 1;
  }

}
