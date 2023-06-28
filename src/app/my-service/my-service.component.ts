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
      icon:'fa-brands fa-angular',
      desc:'I have in-depth knowledge of Angular and Typescript, enabling me to build robust and scalable web applications.'
    },
    {
      id:2,
      title:'Web Development',
      icon:'fa-brands fa-html5',
      desc:'I possess a strong command of HTML, CSS, and JavaScript, allowing me to create visually appealing and interactive websites.'
    },
    {
      id:3,
      title:'Responsive Web Design',
      icon:'fa-brands fa-css3-alt',
      desc:'I specialize in creating responsive designs using Media Queries that adapt beautifully to different screen sizes and devices.'
    },
    {
      id:4,
      title:'Frameworks',
      icon:'fa-brands fa-react',
      desc:"Whether it's jQuery, React, or Angular, I pride myself on writing clean and well-documented code that is maintainable and scalable in the long run."
    },
    {
      id:5,
      title:'Programming Languages',
      icon:'fa-brands fa-java',
      desc:'I have a good knowledge of C, C++, Java and with my logical mindset, I can quickly identify code and deliver high-quality and reliable solutions.'
    },
    {
      id:6,
      title:'Version Control System',
      icon:'fa-brands fa-github',
      desc:'Utilized version control systems like Git to collaborate effectively with team members, track code changes, and ensure code integrity.'
    },
  ];
  constructor(){}
  ngOnInit(): void {
  }

}
