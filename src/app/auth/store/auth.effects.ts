import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import { switchMap, tap, map, catchError } from "rxjs";
import { AuthResponseModel, User } from "src/app/_model";
import { environment } from "src/environments/environment.development";
import { Injectable } from '@angular/core';
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
const handleError = (errRespose: any) => {
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
  // return of(AuthActions.authenticateFail({ message: errorMessage }));
}
@Injectable()

export class AuthEffects {
  public authLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginStart),
    switchMap((authData: { email: string, password: string }) => {
      return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .pipe(
          map((resData: AuthResponseModel) => {
            debugger;
            return handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          })
        )
    })
  ));
  public authSignup = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signupStart),
    switchMap((signupAction: any) => {
      debugger;
      return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
          email: signupAction.email,
          password: signupAction.password,
          returnSecureToken: true
        })
        .pipe(
          map((resData) => {
            return handleAuthentication(resData.expiresIn, resData.email, resData.localId, resData.idToken);
          })
        )
    })
  ));
  constructor(private actions$: Actions, private http: HttpClient) { }
}
