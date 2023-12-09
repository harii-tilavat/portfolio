import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about-facts',
  templateUrl: './about-facts.component.html',
  styleUrls: ['./about-facts.component.scss']
})
export class AboutFactsComponent implements OnInit {
  public clientsMenu=[
    {
      icon:'fa fa-regular fa-smile fa-3x',
      clientCount:2,
      feedback:'Happy Clients',
      desc:'I had a wonderful experience working with my clients'
    },
    {
      icon:'fa-solid fa-history fa-3x',
      clientCount:'5+',
      feedback:'Projects',
      desc:'I have created more than 12 Projects!'
    },
    {
      icon:'fa fa-headphones fa-3x',
      clientCount:'24/7',
      feedback:'Hours of Support',
      desc:'Customer service with 24/7 availability'
    },
    {
      icon:'fa-solid fa-people-group fa-3x',
      clientCount:7,
      feedback:'Team member',
      desc:'Consistently goes above and beyond expectations.'
    },
  ]
  constructor(){}
  ngOnInit(): void {
  }

}
