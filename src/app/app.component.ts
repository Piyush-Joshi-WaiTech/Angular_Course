import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
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

  count1 = signal(10);
  x = 20;
  constructor() {
    effect(() => {
      console.log('count1:', this.count1());
    });
  }

  updateValues() {
    this.count1.set(this.count1() + 10);
    this.x += 1;
  }

  data: WritableSignal<number | string> = signal(10);
  updateSignal() {
    this.data.set('Hello');
  }

  a = 10;
  b = 20;
  z = this.a + this.b;

  showValue() {
    console.log(this.z);
  }
}
