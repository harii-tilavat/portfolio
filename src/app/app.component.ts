import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 @ViewChild('sidebar') sidebar!:ElementRef;
  public title = 'portfolio';

  constructor() { }
  ngOnInit(): void {
  }
  onSidebarChange(event: any) {
    console.log("Value of Event: ", event);
    console.log("Sidebar: ",this.sidebar);
    this.sidebar.nativeElement.classList.toggle('show');
  }
  onHideSidebar():void{
    this.sidebar.nativeElement.classList.remove('show')
  }
}
