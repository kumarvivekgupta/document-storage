import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MemberAuthGuard implements CanActivate {
  constructor(private router:Router, private authService:AuthService)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isLogged())
      {
        return true;
      }
      else{
        window.alert("You dont have access!!! Please connect to Administrator ");
         this.router.navigate(['./login']);
        return false;
      }

  }
}