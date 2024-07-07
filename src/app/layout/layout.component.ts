import { Component } from '@angular/core';
import { SidebarService } from '../_services/sidebar/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public isDisplay!: boolean;
  constructor(private sidebarService: SidebarService) {
  }
  ngOnInit(): void {
  }
  onSidebarChange(event: any) {
    this.isDisplay = event;
  }


}
