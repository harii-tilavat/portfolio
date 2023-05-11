import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarMenu:any=[
   {
    id:1,
    label:'Home',
    routing:null,
    className:'fa-solid fa-house',
    subMenu:[]
   },
   {
    id:2,
    label:'About',
    routing:null,
    className:'fa-solid fa-user',
    subMenu:[]
   },
   {
    id:3,
    label:'Resume',
    routing:null,
    className:'fa-solid fa-file',
    subMenu:[]
   },
   {
    id:4,
    label:'Portfolio',
    routing:null,
    className:'fa-solid fa-envelope',
    subMenu:[]
   },
   {
    id:5,
    label:'Service',
    routing:null,
    className:'fa-solid fa-server',
    subMenu:[]
   },
   {
    id:6,
    label:'Contact',
    routing:null,
    className:'fa-solid fa-phone',
    subMenu:[]
   },

  ]
  constructor() {}
  ngOnInit(): void {
  }

}
