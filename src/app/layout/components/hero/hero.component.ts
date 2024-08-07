import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/_services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Output() sidebarEvent = new EventEmitter<boolean>();
  public isDisplay: boolean = false;
  constructor(private sidebarService: SidebarService, private router: Router) { }
  ngOnInit(): void {
    this.sidebarService.sidebarChanges.subscribe({
      next: (isDisplay: boolean) => {
        this.isDisplay = !isDisplay;
      }
    })
  }
  onClickTop(): void {
    document.getElementById('home')?.scrollIntoView();
    // this.router.navigate(['/home']);
  }
}
