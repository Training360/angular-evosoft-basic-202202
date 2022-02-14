import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTitle = 'Evosoft Course';
  subTitle: string = '';
  numberOfClicks: number = 0;
  buttonClass: {[key: string]: boolean} = {
    'btn-primary': true,
    'btn-secondary': false,
    'btn-success': false,
    'btn-info': false,
  };

  showGreeting(): void {
    this.numberOfClicks++;

    const keys: string[] = Object.keys(this.buttonClass);
    const randIndex: number = Math.floor(
      Math.random() * keys.length
    );
    const currentKey: string = keys[randIndex];
    for (const key of keys) {
      this.buttonClass[key] = currentKey === key;
    }

    this.subTitle = `${this.myTitle}:${this.numberOfClicks}`;
  }
}
