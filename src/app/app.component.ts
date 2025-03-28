import { Component, effect, signal, WritableSignal } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf, CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    RouterOutlet,
    HeaderComponent,
    HeaderComponent,
    ReactiveFormsModule,
    CurrencyConverterPipe,
  ],
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
      if (this.count2() >= 1) {
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

  name = '';
  changeName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }

  task = '';
  taskList: { id: number; task: string }[] = [];

  addTask() {
    this.taskList.push({
      id: this.taskList.length + 1,
      task: this.task,
    });
    this.task = '';
    console.log(this.taskList);
  }
  deleteTask(taskId: number) {
    this.taskList = this.taskList
      .filter((item) => item.id !== taskId)
      .map((item, index) => ({ id: index + 1, task: item.task }));
  }

  bgColor = 'orange';
  fontSize = '50';

  show = true;

  name2 = new FormControl();
  Password = new FormControl();

  displayValue() {
    console.log(this.name2.value, this.Password.value);
  }

  profileForm = new FormGroup({
    name3: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log(this.profileForm.value);
  }

  get name3() {
    return this.profileForm.get('name3');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
  addDetails(val: NgForm) {
    console.log(val.value);
  }

  users = ['Piyush', 'Rushi', 'Kalyan', 'Gaurav'];
  receivedUsers: string[] = [];

  getUsers() {
    this.receivedUsers = [...this.users]; // Pass users data
    console.log('Users passed:', this.receivedUsers);
  }
  amount = 10;
}
