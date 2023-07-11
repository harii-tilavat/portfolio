import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  public captchaCode!: string;
  public loginMode = false;
  public authForm!: FormGroup;
  constructor(private route: ActivatedRoute, private http:HttpClient) { }
  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
    const result = Math.random().toString(36).toUpperCase().substring(2, 7);
    this.captchaCode = result;
    console.log(this.captchaCode);
  }
  onChangeMode(): void {
    this.loginMode = !this.loginMode;
  }
  onSubmit(): void {
    console.log("HTTP: ", this.http);
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  }
}
