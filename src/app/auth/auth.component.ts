import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../_services';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseModel } from '../_model';
import * as AuthActions from './store/auth.actions';
import { Store, StoreModule } from '@ngrx/store';
import { State } from './store/auth.reducer';
import { fadeInAnimation } from '../shared/shared.module';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInAnimation]
})
export class AuthComponent implements OnInit {
  public captchaCode!: string;
  public loginMode = true;
  public authForm!: FormGroup;
  public isSubmitted = false;
  public authObs!: Observable<AuthResponseModel>;
  public isLoading: boolean = false;
  public error!: string | null;
  public storeSub!: Subscription;
  public authSub!: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient, private authService: AuthService,) { }
  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  onChangeMode(): void {
    this.loginMode = !this.loginMode;
  }
  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.authForm.valid) {
      return;
    }
    else {
      if (this.loginMode) {
        // this.authObs = this.authService.authLogin({ email: this.authForm.value.email, password: this.authForm.value.password });
        // this.store.dispatch(AuthActions.loginStart({ email: this.authForm.value.email, password: this.authForm.value.password }));
      }
      else {
        // this.store.dispatch(AuthActions.signupStart({ email: this.authForm.value.email, password: this.authForm.value.password }));
        // this.authObs = this.authService.authSignup({ email: this.authForm.value.email, password: this.authForm.value.password });
      }
      // this.authSub = this.authService.storeAuthInfo(this.authForm.value).subscribe();
      this.resetForm();
    }
  }
  onGoogleSignin(): void {
    alert("This funcationality will added Soon Bro.😁");
  }
  resetForm(): void {
    this.isSubmitted = false;
    this.authForm.reset();
  }
  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
