import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Output() sidebarEvent = new EventEmitter<boolean>();
  public isDisplay:boolean=false;
  constructor() { }
  ngOnInit(): void {
  }
  onToggle():void{
    this.isDisplay=!this.isDisplay;
    this.sidebarEvent.emit(this.isDisplay);
  }
  onClickTop():void{
    document.getElementById('hero')?.scrollIntoView();
  }
}
