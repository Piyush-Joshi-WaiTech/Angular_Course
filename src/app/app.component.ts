import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = 0;
  count1 = signal(10);
  x = 20;
  data: WritableSignal<number | string> = signal(10);

  a = 10;
  b = 20;
  z = this.a + this.b;

  userName = signal('Piyush');
  count2 = signal(0);
  displayHeading = signal(false);

  constructor() {
    effect(() => {
      console.log('count1:', this.count1());
    });

    effect(() => {
      if (this.count2() >= 2) {
        this.displayHeading.set(true);
        setTimeout(() => {
          this.displayHeading.set(false);
        }, 2000);
      } else {
        this.displayHeading.set(false);
      }
    });
  }

  handleCounter(val: string) {
    if (val === 'minus') {
      this.count--;
    } else if (val === 'plus') {
      this.count++;
    } else {
      this.count = 0;
    }
  }

  updateValues() {
    this.count1.set(this.count1() + 10);
    this.x += 1;
  }

  updateSignal() {
    this.data.set('Hello');
  }

  showValue() {
    console.log(this.z);
  }

  updateUserName() {
    this.userName.set('Updated Piyush');
    this.count2.set(this.count2() + 1);
  }
  incrementCount() {
    this.count2.set(this.count2() + 1);
  }
}
