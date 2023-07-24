import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import { State } from 'src/app/auth/store/auth.reducer';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store:Store<fromApp.AppState>) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select('auth').pipe(
        map((resData:State)=>{
          return !resData.user;
        })
      )
    // return true;
  }

}
