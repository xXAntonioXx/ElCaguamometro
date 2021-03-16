import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName: string = "";
  userPass: string = "";

  userCredentials: login = {
    Username:"",
    Password:""
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async logIn(): Promise<void>{
    this.userCredentials.Username = this.userName;
    this.userCredentials.Password = this.userPass;
    this.authService.getToken(this.userCredentials);
  }
}
