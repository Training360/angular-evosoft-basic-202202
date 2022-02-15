import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() appTitle: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(ev: Event): void {
    const inputElement: HTMLInputElement = (ev.target as HTMLInputElement);
    this.search.emit(inputElement.value);
  }

}
