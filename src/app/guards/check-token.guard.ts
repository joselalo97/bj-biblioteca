import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from 'app/services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

  constructor(private storage: StorageService,
    private router: Router) {
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let {token} = route.queryParams  

    if(token){
      this.storage.setToken(token);
      this.router.navigate(['/'])
    } else if(this.storage.verifyToken()){
      return true
    } else {
      this.router.navigate(['no-acceso'])
    } 

    return true;
  }
}
