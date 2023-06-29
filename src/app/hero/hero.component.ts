import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from '../_services/sidebar/sidebar.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Output() sidebarEvent = new EventEmitter<boolean>();
  public isDisplay:boolean=false;
  constructor(private sidebarService:SidebarService) { }
  ngOnInit(): void {
    this.sidebarService.sidebarChanges.subscribe({
      next:(isDisplay:boolean)=>{
        this.isDisplay=!isDisplay;
      }
    })
  }
  onToggle():void{
    this.isDisplay=!this.isDisplay;
    this.sidebarEvent.emit(this.isDisplay);
  }
  onClickTop():void{
    document.getElementById('hero')?.scrollIntoView();
  }
}
