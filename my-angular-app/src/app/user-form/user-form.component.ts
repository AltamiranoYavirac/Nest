// src/app/user-form/user-form.component.ts
import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = { name: '', email: '', password: '' };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser (this.user).subscribe((response) => {
      console.log('User  created:', response);
      this.user = { name: '', email: '', password: '' }; // Reset form
    });
  }
}