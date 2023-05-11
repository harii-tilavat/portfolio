import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public bioList:{subMenu:{id:number,bioLabel:string,bioDetail:string}[]}[] = [
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
          bioDetail: 'www.harittilavat.com',
        },
        {
          id: 3,
          bioLabel: 'Phone',
          bioDetail: '+91 8780258459',
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
  ngOnInit(): void { }
}
