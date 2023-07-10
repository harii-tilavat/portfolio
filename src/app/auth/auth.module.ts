import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'auth-login', component: AuthComponent },
      { path: 'auth-signup', component: AuthComponent },
      { path: '**', redirectTo:'/auth'}
    ]
  }
]

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
