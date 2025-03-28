import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  selectedUser: any = null;

  selectUser(user: any) {
    this.selectedUser = user;
  }

  resetSelection() {
    this.selectedUser = null;
  }

  trackByUserId(index: number, user: any) {
    return user.id;
  }
}
