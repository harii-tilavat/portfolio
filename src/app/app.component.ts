import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from './_services/sidebar/sidebar.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { State } from './auth/store/auth.reducer';
import * as AuthActions from './auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  public isLoading: boolean = false;
  public isDisplay!: boolean;
  public isAuthenticated!:boolean;
  constructor(private sidebarService: SidebarService, private store: Store<fromApp.AppState>) { }
  ngOnInit(): void {
    this.store.select('auth').subscribe({
      next: (response:State) => {
        this.isAuthenticated=!!response.user;
      },
      error: (error) => {
      }
    });
    this.store.dispatch(AuthActions.autoLogin());
  }

  onToggle(): void {
    this.isDisplay = !this.isDisplay;
    this.sidebar.nativeElement.classList.toggle('show');
    // this.sidebarEvent.emit(this.isDisplay);
  }
  onHideSidebar(): void {
    this.sidebar.nativeElement.classList.remove('show');
    this.isDisplay = false;
    this.sidebarService.sidebarChanges.next(this.isDisplay);
  }
  onLoad(): void {
  }
}
