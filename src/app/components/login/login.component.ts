import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'casl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  username = '';
  password = '';

  constructor(private fb: FormBuilder, private userService: UserService) {}

  onSubmit(): void {
    alert('Thanks!');
  }

  login(): void {
    console.log(`Loging in ${this.username}...`);
    console.log(this.userService.getByUsername(this.username));
  }

  register(): void {
    console.log('Registering...');
  }
}
