import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from './_services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  public isLoading:boolean=false;
  public isDisplay!:boolean;
  constructor(private sidebarService:SidebarService) { }
  ngOnInit(): void {
  }

  onToggle():void{
    this.isDisplay=!this.isDisplay;
    this.sidebar.nativeElement.classList.toggle('show');
    // this.sidebarEvent.emit(this.isDisplay);
  }
  onHideSidebar(): void {
    this.sidebar.nativeElement.classList.remove('show');
    this.isDisplay=false;
    this.sidebarService.sidebarChanges.next(this.isDisplay);
  }
  onLoad():void{
    console.log("Loading! ");
  }
}
