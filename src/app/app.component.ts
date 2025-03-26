import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = 0;

  handleCounter(val: string) {
    if (val === 'minus') {
      this.count--;
    } else if (val === 'plus') {
      this.count++;
    } else {
      this.count = 0;
    }
  }
}
