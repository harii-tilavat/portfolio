import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
import { SidebarService } from '../_services/sidebar/sidebar.service';
import { fadeInAnimation } from '../shared/shared.module';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
  animations:[fadeInAnimation]
})
export class MainPanelComponent implements OnInit {


  public title = 'portfolio';
  public isDisplay!:boolean;
  constructor(private sidebarService:SidebarService) {
  }
  ngOnInit(): void {
  }
  onSidebarChange(event: any) {
    this.isDisplay=event;
  }


}
