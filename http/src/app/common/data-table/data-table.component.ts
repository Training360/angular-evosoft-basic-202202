import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements OnInit {

  @Input() list: T[] = [];

  @Input() cols: ITableColumn[] = [];

  @Output() startDelete: EventEmitter<T> = new EventEmitter();

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

  onDelete(item: T): void {
    this.startDelete.emit(item);
  }

}
