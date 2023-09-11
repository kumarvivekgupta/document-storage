import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private router:Router, private authService:AuthService){
   if(!localStorage.getItem('AUTH_TOKEN')){
    this.router.navigate(['/login'], { replaceUrl: true });
   }
  }

  logout(){
    localStorage.removeItem('AUTH_TOKEN');
    this.authService.token=''
;    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
