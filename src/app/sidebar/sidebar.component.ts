import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public activeRouteId: number = 1;
  iconList: any = [
    {
      id: 1,
      icon:'fa-facebook',
      url:'https://www.facebook.com/harit.tilavat.18'
    },
    {
      id: 2,
      icon:'fa-github',
      url:'https://github.com/harii-tilavat'
    },
    {
      id: 3,
      icon:'fa-instagram',
      url:'https://www.instagram.com/harii_x08'
    },
    {
      id: 4,
      icon:'fa-skype',
      url:'https://secure.skype.com/portal/profile?intsrc=client-_-windows-_-8.98.0.407-_-.userInfo.profile&tcg=4ee20ffe-5e43-4a1c-8598-d98c77163f43'
    },
    {
      id: 4,
      icon:'fa-linkedin-in',
      url:'https://www.linkedin.com/in/harit-tilavat-8a6888214'
    }
  ]
  public sidebarMenu: any = [
    {
      id: 1,
      label: 'Home',
      routing: 'hero',
      className: 'fa-solid fa-house',
      subMenu: []
    },
    {
      id: 2,
      label: 'About',
      routing: 'about',
      className: 'fa-solid fa-user',
      subMenu: []
    },
    {
      id: 3,
      label: 'Resume',
      routing: 'resume',
      className: 'fa-solid fa-file',
      subMenu: []
    },
    {
      id: 4,
      label: 'Portfolio',
      routing: 'portfolio',
      className: 'fa-solid fa-envelope',
      subMenu: []
    },
    {
      id: 5,
      label: 'Service',
      routing: 'services',
      className: 'fa-solid fa-server',
      subMenu: []
    },
    {
      id: 5,
      label: 'Contact',
      routing: 'contact',
      className: 'fa-solid fa-phone',
      subMenu: []
    },

  ]
  constructor() { }
  ngOnInit(): void {
  }
  onRouting(index: number, routingValue: string) {
    console.log("Value is: ", routingValue);
    document.getElementById(routingValue)?.scrollIntoView();
    this.activeRouteId = index;
    console.log(this.activeRouteId);
  }
}
