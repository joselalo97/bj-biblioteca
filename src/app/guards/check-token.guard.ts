import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { StorageService } from 'app/services/storage.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate, CanLoad {

  constructor(private storage: StorageService) {
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {token} = route.queryParams
    this.storage.setToken(token)
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.verifyToken()
  }
}
