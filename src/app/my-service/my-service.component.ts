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
      title:'Angular Developer',
      icon:'fa-solid fa-signal',
      desc:'I have in-depth knowledge of Angular and Typescript, enabling me to build robust and scalable web applications.'
    },
    {
      id:2,
      title:'Web Development',
      icon:'fa-solid fa-magnifying-glass-chart',
      desc:'I possess a strong command of HTML, CSS, and JavaScript, allowing me to create visually appealing and interactive websites.'
    },
    {
      id:3,
      title:'Responsive Web Design',
      icon:'fa-solid fa-code',
      desc:'I specialize in creating responsive designs using Media Queries that adapt beautifully to different screen sizes and devices.'
    },
    {
      id:4,
      title:'Frameworks',
      icon:'fa-solid fa-tv',
      desc:"Whether it's jQuery, React, or Angular, I pride myself on writing clean and well-documented code that is maintainable and scalable in the long run."
    },
    {
      id:5,
      title:'Programming Languages',
      icon:'fa-solid fa-pencil',
      desc:'I have a good knowledge of C, C++, Java and with my logical mindset, I can quickly identify code and deliver high-quality and reliable solutions.'
    },
    {
      id:6,
      title:'Graphic Design',
      icon:'fa-solid fa-signal',
      desc:'Using Figma, I can create and iterate on design concepts, allowing for seamless collaboration and rapid design iteration.'
    },
  ];
  constructor(){}
  ngOnInit(): void {
  }

}
