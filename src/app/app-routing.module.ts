import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'about', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'skill', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'resume', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'services', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'contact', loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
