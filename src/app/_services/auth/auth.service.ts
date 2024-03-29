import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthResponseModel } from 'src/app/_model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = new Subject<boolean>();
  constructor(private http: HttpClient) { }
  authLogin(userData: { email: string, password: string }): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`, userData);
  }
  authSignup(userData: { email: string, password: string }): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`, userData);
  }
  storeAuthInfo(userData: any): Observable<any> {
    const url = 'https://hariitilavat-default-rtdb.firebaseio.com/auth-info.json';
    return this.http.post(url, userData);
  }
  // Signin ------------ https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  // Signup ------------ https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
}
