import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { State } from '../auth/store/auth.reducer';
import { Router } from '@angular/router';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public activeRouteId: number = 1;
  public isAuthenticated!: boolean;
  public themeClass: string = 'light';
  @Output() sidebarEvent = new EventEmitter<boolean>();
  iconList: any = [
    {
      id: 1,
      icon: faFacebook,
      url: 'https://www.facebook.com/harit.tilavat.18'
    },
    {
      id: 2,
      icon: faGithub,
      url: 'https://github.com/harii-tilavat'
    },
    {
      id: 3,
      icon: faInstagram,
      url: 'https://www.instagram.com/harii_x08'
    },
    {
      id: 4,
      icon: faSkype,
      url: 'https://secure.skype.com/portal/profile?intsrc=client-_-windows-_-8.98.0.407-_-.userInfo.profile&tcg=4ee20ffe-5e43-4a1c-8598-d98c77163f43'
    },
    {
      id: 4,
      icon: faLinkedinIn,
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
    });
  }
  onRouting(index: number, routingValue: string, label: string) {
    this.sidebarEvent.emit(false);
    setTimeout(() => {
      document.getElementById(routingValue)?.scrollIntoView();
    }, 20);
    this.activeRouteId = index;
    if (label === 'Logout') {
      if (confirm('Are you sure')) {
        this.store.dispatch(AuthActions.logout());
        return;
      }
    }
  }
  onThemeChange(): void {
    this.themeClass = this.themeClass === 'dark' ? 'light' : 'dark';
    document.getElementById('main-theme')?.classList.toggle('dark-theme');
  }
}
