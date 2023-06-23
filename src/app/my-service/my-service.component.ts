import { Component, OnInit } from '@angular/core';
import { ServiceListModel } from '../_model';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit{
  public serviceList:ServiceListModel[]=[
    {
      id:1,
      title:'SEO',
      icon:'fa-solid fa-signal',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
    {
      id:2,
      title:'Facebook Marketing',
      icon:'fa-solid fa-magnifying-glass-chart',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
    {
      id:3,
      title:'Youtube Marketing',
      icon:'fa-solid fa-tv',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
    {
      id:4,
      title:'Content Writing',
      icon:'fa-solid fa-pencil',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
    {
      id:5,
      title:'Web Design',
      icon:'fa-solid fa-code',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
    {
      id:6,
      title:'Graphic Design',
      icon:'fa-solid fa-signal',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ab.consectetur adipisicing elit. Quisquam, ab.'
    },
  ];
  constructor(){}
  ngOnInit(): void {
  }

}
