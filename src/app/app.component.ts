import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SidebarService } from './_services/sidebar/sidebar.service';
import { Store } from '@ngrx/store';
import { State } from './auth/store/auth.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { fadeInAnimation } from './shared/shared.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  public title: string = 'Portfolio';
  public isLoading: boolean = true;
  public isDisplay!: boolean;
  public isAuthenticated!: boolean;
  constructor(private sidebarService: SidebarService) { }
  ngOnInit(): void {
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
