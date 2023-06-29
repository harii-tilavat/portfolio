import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from './_services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  public title = 'portfolio';
  public isDisplay!:boolean;
  constructor(private sidebarService:SidebarService) { }
  ngOnInit(): void {
  }
  onSidebarChange(event: any) {
    console.log("Value of Event: ", event);
    console.log("Sidebar: ", this.sidebar);
    this.isDisplay=event;
    this.sidebar.nativeElement.classList.toggle('show');
  }
  onHideSidebar(): void {
    this.sidebar.nativeElement.classList.remove('show');
    this.sidebarService.sidebarChanges.next(this.isDisplay);
  }
}
