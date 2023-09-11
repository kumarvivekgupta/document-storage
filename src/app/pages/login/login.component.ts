import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService,) { }
  public async login(email: string, password: string) {

    try {
      const url = (await this.authService.mockLogin(
          email,
          password,
      )) as string;
      
      this.navigateTo(url);
      console.log(url);
  } catch (e) {
      this.errorMessage = 'Wrong Credentials!';
      console.error('Unable to Login!\n', e);
  }
  
   // this.router.navigate(['sidenav'], { replaceUrl: true });
  }
  ngOnInit() {
    this.errorMessage = '';
    if (this.authService.isLogged()) {
      this.navigateTo('/sidenav');
    }
  }
  public navigateTo(url?: string) {
    url = url||'/login';
    this.router.navigate([url], { replaceUrl: true });
  }

}
