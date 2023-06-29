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
  public isLoading:boolean=false;
  constructor(private sidebarService:SidebarService) {
  }
  ngOnInit(): void {
    this.isLoading=true;
    setTimeout(()=>{
      this.isLoading=false;
    },2400);
  }
  onSidebarChange(event: any) {
    this.isDisplay=event;
    this.sidebar.nativeElement.classList.toggle('show');
  }
  onHideSidebar(): void {
    this.sidebar.nativeElement.classList.remove('show');
    this.sidebarService.sidebarChanges.next(this.isDisplay);
  }
}
