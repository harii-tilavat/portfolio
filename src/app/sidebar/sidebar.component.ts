import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { State } from '../auth/store/auth.reducer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public activeRouteId: number = 1;
  public svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
    viewBox="0 0 384 512">
    <path
      d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
  </svg>
  `;
  public isAuthenticated!: boolean;
  iconList: any = [
    {
      id: 1,
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/harit.tilavat.18'
    },
    {
      id: 2,
      icon: 'fa-github',
      url: 'https://github.com/harii-tilavat'
    },
    {
      id: 3,
      icon: 'fa-instagram',
      url: 'https://www.instagram.com/harii_x08'
    },
    {
      id: 4,
      icon: 'fa-skype',
      url: 'https://secure.skype.com/portal/profile?intsrc=client-_-windows-_-8.98.0.407-_-.userInfo.profile&tcg=4ee20ffe-5e43-4a1c-8598-d98c77163f43'
    },
    {
      id: 4,
      icon: 'fa-linkedin-in',
      url: 'https://www.linkedin.com/in/harit-tilavat-8a6888214'
    }
  ]
  public sidebarMenu: any = [
    {
      id: 1,
      label: 'Home',
      routing: 'home',
      className: 'fa-solid fa-house',
    },
    {
      id: 2,
      label: 'About',
      routing: 'about',
      className: 'fa-solid fa-user',
    },
    {
      id: 3,
      label: 'Skills',
      routing: 'skill',
      className: 'fa-solid fa-envelope',
    },
    {
      id: 4,
      label: 'Resume',
      routing: 'resume',
      className: 'fa-solid fa-file',
    },
    {
      id: 5,
      label: 'Service',
      routing: 'services',
      className: 'fa-solid fa-server',
    },
    {
      id: 5,
      label: 'Contact',
      routing: 'contact',
      className: 'fa-solid fa-phone',
    },
    {
      id: 6,
      label: 'Login',
      routing: '/auth',
      className: 'fa-solid fa-right-to-bracket',
    },
    {
      id: 7,
      label: 'Logout',
      routing: '/auth',
      className: 'fa-solid fa-right-to-bracket',
    },
  ]
  constructor(private store: Store<fromApp.AppState>, private router: Router) { }
  ngOnInit(): void {
    this.store.select('auth').subscribe({
      next: (resData: State) => {
        this.isAuthenticated = !!resData.user;
      }
    })
  }
  onRouting(index: number, routingValue: string, label: string) {
    setTimeout(() => {
      document.getElementById(routingValue)?.scrollIntoView();
    }, 50);
    this.activeRouteId = index;
    if (label === 'Logout') {
      if (confirm('Are you sure')) {
        this.store.dispatch(AuthActions.logout());
      }
      else {
        alert("Okay");
      }
    }
  }
}
