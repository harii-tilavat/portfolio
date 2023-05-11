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
      clientCount:232,
      feedback:'Happy Clients',
      desc:'Lorem ipsum dolor sit amet.'
    },
    {
      icon:'fa-solid fa-history fa-3x',
      clientCount:551,
      feedback:'Projects',
      desc:'Lorem ipsum dolor sit amet.'
    },
    {
      icon:'fa fa-headphones fa-3x',
      clientCount:1453,
      feedback:'Hours of Support',
      desc:'Lorem ipsum dolor sit amet.'
    },
    {
      icon:'fa-solid fa-people-group fa-3x',
      clientCount:32,
      feedback:'Hard Workers',
      desc:'Lorem ipsum dolor sit amet.'
    },
  ]
  constructor(){}
  ngOnInit(): void {
  }

}
