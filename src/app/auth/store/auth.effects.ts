import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import { switchMap, tap, map, catchError, of } from "rxjs";
import { AuthResponseModel, User, UserModel } from "src/app/_model";
import { environment } from "src/environments/environment.development";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
const handleAuthentication = (email: string, userId: string, token: string, expiresIn: number) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return AuthActions.authenticateSuccess({
    email: email,
    userId: userId,
    token: token,
    expirationDate: expirationDate,
    redirect: true
  });
}
const handleError = (errRespose: HttpErrorResponse) => {
  let errorMessage = "An unknown error!";
  switch (errRespose.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = "Email is already exist!";
      break;
    case 'INVALID_PASSWORD':
      errorMessage = "Invalid Password!";
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = "Email is not exist!";
      break;
    default:
      errorMessage = errRespose.error.error.message;
  }
  return of(AuthActions.authenticateFail({ message: errorMessage }));
}
@Injectable()

export class AuthEffects {
  public authLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginStart),
    switchMap((authData: { email: string, password: string }) => {
      return this.http.post<AuthResponseModel>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .pipe(
          map((resData: AuthResponseModel) => {
            return handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }),
          catchError((error: HttpErrorResponse) => {
            return handleError(error);
          })
        )
    })
  ));
  public authSignup = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signupStart),
    switchMap((signupAction: any) => {
      return this.http.post<AuthResponseModel>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
          email: signupAction.email,
          password: signupAction.password,
          returnSecureToken: true
        })
        .pipe(
          map((resData:AuthResponseModel) => {
            return handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }),
          catchError((errRespose: HttpErrorResponse) => {
            return handleError(errRespose);
          })
        )
    })
  ));
  public logout = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap((resData) => {
      localStorage.removeItem('userData');
      this.router.navigate(['/auth']);
    })
  ), { dispatch: false });

  public authRedirect = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.authenticateSuccess),
    tap((authSuccessAction:any) => {
      if(authSuccessAction.redirect){
        this.router.navigate(['/home']);
      }
    })), { dispatch: false });
  public autoLogin= createEffect(()=>this.actions$.pipe(
    ofType(AuthActions.autoLogin),
    map(()=>{
      const userData: UserModel = JSON.parse(localStorage.getItem('userData') as string);
      if (!userData) {
        return { type: 'DUMMY' };
      }
      const loadedUser: User = new User(userData.email, userData.id, userData._token, userData._tokenExpirationDate);
      if (loadedUser.token) {
        // const duration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        return AuthActions.authenticateSuccess({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate),
          redirect:false
        });
      }
      else {
        return { type: 'DUMMY' };
      }
    })
  ))
  constructor(private actions$: Actions, private http: HttpClient, private router: Router) { }
}
