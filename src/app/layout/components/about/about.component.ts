import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public bioList:{subMenu:{id:number,bioLabel:string,bioDetail:string,link?:string}[]}[] = [
    {
      subMenu: [
        {
          id: 1,
          bioLabel: 'Birthday',
          bioDetail: '20 October 2003',
        },
        {
          id: 2,
          bioLabel: 'Website',
          bioDetail: 'hariitilavat.web.app',
          link:'https://hariitilavat.web.app/'
        },
        {
          id: 3,
          bioLabel: 'Phone',
          bioDetail: '+91 6356995453',
        },
        {
          id: 4,
          bioLabel: 'City',
          bioDetail: 'Surat, Gujarat',
        },
      ],
    },
    {
      subMenu: [
        {
          id: 5,
          bioLabel: 'Age',
          bioDetail: '20',
        },
        {
          id: 6,
          bioLabel: 'Degree',
          bioDetail: 'BCA',
        },
        {
          id: 7,
          bioLabel: 'email',
          bioDetail: 'harittilavat10@gmail.com',
        },
        {
          id: 8,
          bioLabel: 'Freelance',
          bioDetail: 'Available',
        },
      ],
    },
  ];
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
  ngOnInit(): void { }
}
