import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router);
  loinForm: LoginForm = {
    username: '',
    password: '',
    keepMe: false
  };
  message: string = '';
  check() {
    if (this.loinForm.username == 'admin' && this.loinForm.password == 'admin') {
      sessionStorage.setItem('token', 'dhjbdcjkncbj');
      if (this.loinForm.keepMe == true) {
        localStorage.setItem('token', 'dhjbdcjkncbj');
      }
      this.router.navigateByUrl('/private');
    }
    else {
      this.message = 'نام کاربری یا گذرواژه صحیح نیست';
    }
  }
}
export interface LoginForm {
  username: string;
  password: string;
  keepMe: boolean;
}
